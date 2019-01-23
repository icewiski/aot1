import './control-panel.scss'
import template from './control-panel.html'
import { Component } from '../component'
const jsondata = require('../../resource/json')
const kingdomsdata = require('../../resource/kingdomsdata')
require('../../services/leafletmove')

/**
 * Layer Panel Component
 * Render and control layer-toggle side-panel
 * @extends Component
 */
export class ControlPanel extends Component {
  /** LayerPanel Component Constructor
   * @param { Object } props.events.layerToggle Layer toggle event listener
   */
  constructor (placeholderId, props) {
    super(placeholderId, props, template)

    this.epdata=kingdomsdata
   
    // Toggle layer panel on click (mobile only)
    this.refs.playdatabtn.addEventListener('click', () => this.playdata())
    this.refs.addepbtn.addEventListener('click', () => this.addep())
    this.refs.minusepbtn.addEventListener('click', () => this.minusep())
    
    this.ss=parseInt(this.refs.ssvalue.getAttribute("value"))
    this.ep=parseInt(this.refs.epvalue.getAttribute("value"))
    this.refs.ssvalue.innerHTML =this.ss
    this.refs.epvalue.innerHTML =this.ep
    
    // Add a toggle button for each layer
   // props.data.layerNames.forEach((name) => this.addLayerButton(name)) 
   }

  /** Create and append new layer button DIV */
  playdata(){
    
  console.log('play',typeof this.ss,this.ss,typeof this.ep,this.ep,this.epdata)
  }

  addep(){
  this.ep=this.ep+1
  this.refs.epvalue.innerHTML =this.ep
  console.log('add',this.ep,typeof this.ep)
  }

  minusep(){
    this.ep=this.ep-1
 this.refs.epvalue.innerHTML =this.ep
  console.log('minus',this.ep,typeof this.ep)

  }
  /** Toggle the info panel (only applies to mobile) */


  /** Toggle map layer visibility */
  toggleMapLayer (layerName) {
    // Toggle active UI status
    this.componentElem.querySelector(`[ref=${layerName}-toggle]`).classList.toggle('toggle-active')

    // Trigger layer toggle callback
    this.triggerEvent('layerToggle', layerName)
  }

}
