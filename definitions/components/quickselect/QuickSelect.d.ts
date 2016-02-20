/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * Materialize dropdown inspired quickselect list.
 *
 * *requires materialize js & css to be included on your html page.
 *
 * USAGE:
 *
 * class MyQuickSelect extends React.Component<any, any> {
 *   generateActiveView = (item: any) => {
 *     return <div>{item.foo}</div>;
 *   }
 *   generateListView = (item: any) => {
 *     return <div>{item.foo}</div>;
 *   }
 *   onSelectedItemChanged = (item: any) => {
 *     console.log('selected item is ' + item.foo);
 *   }
 *   render() {
 *     let items = [{foo:'Hello'},{foo:'World'}];
 *     return <QuickSelect items={items} activeViewComponentGenerator={this.generateActiveView}
          listViewComponentGenerator={this.generateListView} onSelectedItemChanged={this.onSelectedChannelChanged} />;
 *   }
 * }
 *
 */
import * as React from 'react';
export interface QuickSelectProps {
    items: Array<any>;
    activeViewComponentGenerator: (item: any) => any;
    listViewComponentGenerator: (item: any) => any;
    onSelectedItemChanged: (item: any) => void;
}
export interface QuickSelectState {
    selectedIndex: number;
}
declare class QuickSelect extends React.Component<QuickSelectProps, QuickSelectState> {
    private static idCounter;
    private uniqueId;
    constructor(props: QuickSelectProps);
    onItemSelect: (item: any, itemIndex: number) => void;
    buildListItem: (item: any, itemIndex: number) => JSX.Element;
    render(): JSX.Element;
}
export default QuickSelect;
