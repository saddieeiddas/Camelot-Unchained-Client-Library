/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import CoreSettings from '../core/CoreSettings';
import channelId from '../core/constants/channelId';
import client from '../core/client';

// TODO: Define promise properly.  Can't use this as a return type
// for methods returning a promise.
declare const Promise: any;

// TODO: I wanted this to extend CoreSettings but CoreSettings
// won't allow super to access its memebers, or pass anything
// but a default CoreSettings object to its constructor, so
// you can't customise the settings at all (e.g. like define
// the api key or current channel)
class Settings {
	core: CoreSettings;
	url: string;
	port: number;
	apiKey: string;
	channelId: channelId;
	timeout: number;
	constructor(channel:channelId) {
		this.core = new CoreSettings();			// TODO: This class is a bit weird
		this.channelId = channel;
		this.timeout = 2000;					// default timeout
		switch(channel) {
			case channelId.HATCHERY:
				this.url = 'hatchery.camelotunchained.com';
				// BUG: (returns https://) this.url = this.core.hatcheryApiUrl;
				this.port = this.core.hatcheryApiPort;
				break;
			case channelId.WYRMLING:
				this.url = 'wyrmling.camelotunchained.com';
				// BUG: (returns https://) this.url = this.core.wyrmlingApiUrl;
				this.port = this.core.wyrmlingApiPort;
				break;
		}
	}
	getApiKey() {
		if (!this.apiKey) {
			this.apiKey = client.loginToken;		// in fake API will prompt for token
		}
		return this.apiKey;
	}
}

export class Rest {

	private settings: Settings;

	constructor() {
	}

	selectServer(channel:channelId) {
		this.settings = new Settings(channel);
	}

  makeUrl(verb: string, useHttps: boolean) {
    var protocol = useHttps ? 'https' : 'http';
    var port = useHttps ? '4443' : '8000';
    return protocol + '://' + this.settings.url + ':' + port + '/api/' + verb;
  }

  request(method: string, verb: string, params: any = {}, useHttps:boolean = false, timeout: number = 0) {
		let url: string;

		// construct request URL
    url = this.makeUrl(verb, useHttps);

		// add params
    if (params) {
      let key: string;
      let qs: string[] = [];
      for (key in params) {
        if (params.hasOwnProperty(key)) {
          qs.push(key + "=" + encodeURIComponent(params[key]));
        }
      }
      if (qs.length) {
        url += "?" + qs.join("&");
      }
    }

		function executor(resolve: (data: any) => void, reject: (status: string, errorThrown: string) => void) {
			const XHR : XMLHttpRequest = new XMLHttpRequest();

			// Set timeout
      if (0 < timeout) {
        XHR.timeout = timeout;
      }

      /*
      * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
      * claims listeners need to be added before calling open
      */
      XHR.addEventListener("progress", (ev: ProgressEvent) => {
        console.dir(ev);
      });

      XHR.addEventListener("load", (ev: UIEvent) => {
        if (XHR.readyState === 4 && XHR.status === 200) {
          try {
            const data: any = JSON.parse(XHR.response);
            resolve(data);
          } catch (e) {
            reject("parse-fail", e.message);
          }
        }
      });

      XHR.addEventListener("abort", (ev: UIEvent) => {
        reject("abort", "aborted");
      });

      XHR.addEventListener("error", (ev: UIEvent) => {
        reject("error", "errored");
      });

			// TODO: Implement progressive timeouts
			XHR.open(method, url, true);
			XHR.send();
		}

		return new Promise(executor);
	}

  GET(verb: string, params: Object = {}, timeout: number = 0, useHttps: boolean = false) {
    return this.request("GET", verb, params, useHttps, timeout);
  }
}

export default class RestAPI {
	private api: Rest;
	constructor() {
		this.api = new Rest();
		let server: string [] = client.webAPIHost.split(".");
		switch(server[0]) {
			case "hatchery":
				this.api.selectServer(channelId.HATCHERY);
				break;
			case "wyrmling":
				this.api.selectServer(channelId.WYRMLING);
				break;
		}
	}

  factions(timeout: number = 2000) {
    return this.api.GET("game/factions", {}, timeout);
	}
	races(timeout: number = 2000) {
    return this.api.GET("game/races", {}, timeout);
	}
	players(timeout: number = 2000) {
    return this.api.GET("game/players", {}, timeout);
	}
	banes() {
		return this.api.GET("game/banes");
	}
	boons() {
		return this.api.GET("game/boons");
	}
	attributes() {
		return this.api.GET("game/attributes");
	}

	//	Optional Query Parameters: {
	//		includeControlPoints: false 		// true/false
  //	}
  controlGame(query: Object = undefined, timeout = 3000) {
		return this.api.GET("game/controlgame", query, timeout);
	}

	patchnotes() {
		return this.api.GET("patchnotes");
	}
	banners() {
		return this.api.GET("banners");
	}
	scheduledEvents() {
		return this.api.GET("scheduledevents");
	}
	kills(query:Object = undefined, timeout:number = 2000) {
		return this.api.GET("kills", query, timeout);
  }

  public craftedAbilities(loginToken: string, characterID: string) {
    return this.api.GET("craftedabilities", { loginToken: loginToken, characterID: characterID }, 0, true);
  }
}
