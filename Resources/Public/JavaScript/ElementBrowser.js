/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
define(["require","exports","TYPO3/CMS/Backend/Utility/MessageUtility","jquery","TYPO3/CMS/Backend/Modal"],function(e,t,r,i,n){"use strict";return new class{constructor(){this.opener=null,this.thisScriptUrl="",this.mode="",this.formFieldName="",this.fieldReference="",this.fieldReferenceSlashed="",this.rte={parameters:"",configuration:""},this.irre={objectId:0},this.focusOpenerAndClose=(()=>{this.getParent()&&this.getParent().focus(),n.dismiss(),close()}),i(()=>{const e=i("body").data();this.thisScriptUrl=e.thisScriptUrl,this.mode=e.mode,this.formFieldName=e.formFieldName,this.fieldReference=e.fieldReference,this.fieldReferenceSlashed=e.fieldReferenceSlashed,this.rte.parameters=e.rteParameters,this.rte.configuration=e.rteConfiguration,this.irre.objectId=e.irreObjectId})}setReferences(){return!!(this.getParent()&&this.getParent().content&&this.getParent().content.document.editform&&this.getParent().content.document.editform[this.formFieldName])&&(this.targetDoc=this.getParent().content.document,this.elRef=this.targetDoc.editform[this.formFieldName],!0)}executeFunctionByName(e,t,...r){const i=e.split("."),n=i.pop();for(let e of i)t=t[e];return t[n].apply(t,r)}getParent(){return null===this.opener&&(void 0!==window.parent&&void 0!==window.parent.document.list_frame&&null!==window.parent.document.list_frame.parent.document.querySelector(".t3js-modal-iframe")?this.opener=window.parent.document.list_frame:void 0!==window.parent&&void 0!==window.parent.frames.list_frame&&null!==window.parent.frames.list_frame.parent.document.querySelector(".t3js-modal-iframe")?this.opener=window.parent.frames.list_frame:void 0!==window.frames&&void 0!==window.frames.frameElement&&null!==window.frames.frameElement&&window.frames.frameElement.classList.contains("t3js-modal-iframe")?this.opener=window.frames.frameElement.contentWindow.parent:window.opener&&(this.opener=window.opener)),this.opener}insertElement(e,t,i,n,s,o,a,d,m){if(this.irre.objectId){if(this.getParent()){const i={objectGroup:this.irre.objectId,table:e,uid:t};r.MessageUtility.send(i,this.getParent())}else alert("Error - reference to main window is not set properly!"),this.focusOpenerAndClose();return m&&this.focusOpenerAndClose(),!0}return!this.fieldReference||this.rte.parameters||this.rte.configuration?(this.getParent()&&this.getParent().content&&this.getParent().content.document.editform&&this.getParent().content.document.editform[this.formFieldName]?this.getParent().group_change("add",this.fieldReference,this.rte.parameters,this.rte.configuration,this.targetDoc.editform[this.formFieldName],this.getParent().content.document):alert("Error - reference to main window is not set properly!"),m&&this.focusOpenerAndClose()):this.addElement(n,e+"_"+t,s,m),!1}addElement(e,t,r,i){this.getParent()&&this.getParent().setFormValueFromBrowseWin?(this.getParent().setFormValueFromBrowseWin(this.fieldReference,r||t,e),i&&this.focusOpenerAndClose()):(alert("Error - reference to main window is not set properly!"),this.focusOpenerAndClose())}}});