/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Materialize Button
 * Accepts custom components for button and list items
 */

import * as React from 'react';

// constants

var qsDropDownId:number = 0;

export class QuickSelectProps {
  label:any;
  list:any[];
  values:any[];
  styleButton:any;
  styleList:any;
  onSelect:any;
}

export class QuickSelectState {
  uniqueId: string;
  index: number;
}

class QuickSelect extends React.Component<QuickSelectProps, QuickSelectState> {
  constructor(props: QuickSelectProps) {
    super(props);
  }
  componentWillMount(props: QuickSelectProps, state: QuickSelectState) {
    this.setState({index: 0, uniqueId: 'QS-Dropdown-' + qsDropDownId++} as any);
  }
  handleItemOnClick(event: any, index: number, value: any) {
    this.setState({index: index, uniqueId: this.state.uniqueId} as any);
    
    this.props.onSelect(index, value, this.state.uniqueId);
  }
  render() {
    const dropDownOutput:any[] = [];
    
    //create list
    if(this.props.list.length === this.props.values.length && this.props.list.length > 0) {
      for (let i = 0; i < this.props.list.length; i++) {
        const item = this.props.list[i];
        const value = this.props.values[i];
        
        dropDownOutput.push(
          <div key={i} onClick={(event:any) => this.handleItemOnClick(event, i, value)}>
            <div className={'quickselect-auto-width ' + this.props.styleList}>
              {item}
            </div>
          </div>);
      }
    }
    
    // Draw the selected item
    var currentLabel = this.props.label;
    if (this.props.list[this.state.index]) {
      currentLabel = this.props.list[this.state.index];
    }

    return(
      <div>
        <div className={'quickselect-auto-width dropdown-button ' + this.props.styleButton} data-beloworigin='true' data-constrainwidth='false' data-verticaloffset='0' data-activates={this.state.uniqueId} data-style={'quickselect-default'}>{currentLabel}</div>
        <div id={this.state.uniqueId} className='quickselect-default'>
          {dropDownOutput}
        </div>
      </div>
    );
  }
}

export default QuickSelect;