/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const defaultColors: string[] = ['#19b24b', '#feeb00', '#fe1e14', '#200000'];

export class WoundColors {
  private key: string = "cse.wound.colors";
  private colors: string[];
  constructor() {
    this.load();
  }
  load() : void {
    const value = localStorage.getItem(this.key);
    if (value && typeof value === "string") {
      this.colors = value.split(",");

      // stored color validation
      for (var i = 0; i < this.colors.length; i++) {
        const color: string = this.colors[i];
        if (color.length !== 7 && color.substring(0,0) !== "#") {
          this.colors[i] = "#ffffff";
        }
      }
    } else {
      this.colors = defaultColors;
    }
  }
  save() : void {
    localStorage.setItem(this.key, this.colors.join(','));
  }
  public getColorForWound(wound:number) : string {
    return this.colors[wound] || defaultColors[0];
  }
}
