import React from 'react'
// import ReactDOM from 'react-dom'
// import Moment from 'moment'
import Modele_de_lettre_de_contestation_des_PV_reçus_pour_deplacement_non_justifie_pendant_le_confinement from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/Modele_de_lettre_de_contestation_des_PV_reçus_pour_deplacement_non_justifie_pendant_le_confinement.pdf'
import brigade_affiche from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/brigade_affiche.pdf'
import covide_comment_faire_face_aux_controles from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/covide_comment_faire_face_aux_controles.pdf'
import tout_le_monde_peut_se_passer_de_la_police from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/tout_le_monde_peut_se_passer_de_la_police.pdf'
import cjsp_1_an_01 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_01.pdf'
import cjsp_1_an_02 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_02.pdf'
import cjsp_1_an_03 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_03.pdf'
import cjsp_1_an_04 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_04.pdf'
import cjsp_1_an_05 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_05.pdf'
import cjsp_1_an_06 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_06.pdf'
import cjsp_1_an_07 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_07.pdf'
import cjsp_1_an_08 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_08.pdf'
import cjsp_1_an_09 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_09.pdf'
import cjsp_1_an_10 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_10.pdf'
import cjsp_1_an_11 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_11.pdf'
import cjsp_1_an_12 from './maxibib/Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_12.pdf'
import demonter_un_monument from './maxibib/Bibliotheque_Edition_burn_aout/comment_demonter_un_monument/demonter_un_monument.pdf'
import De_la_misere_en_milieu_étudiant from './maxibib/Bibliotheque_Edition_burn_aout/de_la_misere_en_milieu_etudiant/De_la_misere_en_milieu_étudiant.pdf'
import L_usage_de_la_violence from './maxibib/Bibliotheque_Edition_burn_aout/l_usage_de_la_violence/L_usage_de_la_violence.pdf'
import SHOW_01 from './maxibib/Bibliotheque_Show/SHOW_01.pdf'
import SHOW_02 from './maxibib/Bibliotheque_Show/SHOW_02.pdf'
import SHOW_03 from './maxibib/Bibliotheque_Show/SHOW_03.pdf'
import FileBrowser, { Icons } from 'react-keyed-file-browser'
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { faFolder, faFolderOpen, faFilePdf, faFile, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class NestedEditableDemo extends React.Component {
  state = {
    files: [
      { key: 'Bibliotheque_Brigade_de_solidarité_populaire/Modele_de_lettre_de_contestation_des_PV_reçus_pour_deplacement_non_justifie_pendant_le_confinement.pdf', size: 150397, url: Modele_de_lettre_de_contestation_des_PV_reçus_pour_deplacement_non_justifie_pendant_le_confinement },
      { key: 'Bibliotheque_Brigade_de_solidarité_populaire/brigade_affiche.pdf', size: 194134, url: brigade_affiche },
      { key: 'Bibliotheque_Brigade_de_solidarité_populaire/covide_comment_faire_face_aux_controles.pdf', size: 74205, url: covide_comment_faire_face_aux_controles },
      { key: 'Bibliotheque_Brigade_de_solidarité_populaire/tout_le_monde_peut_se_passer_de_la_police.pdf', size: 168880, url: tout_le_monde_peut_se_passer_de_la_police },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_01.pdf', size: 3344760, url: cjsp_1_an_01 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_02.pdf', size: 386276, url: cjsp_1_an_02 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_03.pdf', size: 1057711, url: cjsp_1_an_03 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_04.pdf', size: 4976342, url: cjsp_1_an_04 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_05.pdf', size: 117223, url: cjsp_1_an_05 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_06.pdf', size: 574204, url: cjsp_1_an_06 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_07.pdf', size: 5893599, url: cjsp_1_an_07 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_08.pdf', size: 810631, url: cjsp_1_an_08 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_09.pdf', size: 10013538, url: cjsp_1_an_09 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_10.pdf', size: 759865, url: cjsp_1_an_10 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_11.pdf', size: 125311, url: cjsp_1_an_11 },
      { key: 'Bibliotheque_Edition_burn_aout/chaque_jour_sa_peine/pdf/cjsp_1_an/cjsp_1_an_12.pdf', size: 119391, url: cjsp_1_an_12 },
      { key: 'Bibliotheque_Edition_burn_aout/comment_demonter_un_monument/demonter_un_monument.pdf', size: 852885, url: demonter_un_monument },
      { key: 'Bibliotheque_Edition_burn_aout/de_la_misere_en_milieu_etudiant/De_la_misere_en_milieu_étudiant.pdf', size: 222991, url: De_la_misere_en_milieu_étudiant },
      { key: 'Bibliotheque_Edition_burn_aout/l_usage_de_la_violence/L_usage_de_la_violence.pdf', size: 1250659, url: L_usage_de_la_violence },
      { key: 'Bibliotheque_Show/SHOW_01.pdf', size: 24428450, url: SHOW_01 },
      { key: 'Bibliotheque_Show/SHOW_02.pdf', size: 6820042, url: SHOW_02 },
      { key: 'Bibliotheque_Show/SHOW_03.pdf', size: 17712114, url: SHOW_03 }
    ],
  }

  // handleCreateFolder = (key) => {
  //   this.setState(state => {
  //     state.files = state.files.concat([{
  //       key: key,
  //     }])
  //     return state
  //   })
  // }
  // handleCreateFiles = (files, prefix) => {
  //   this.setState(state => {
  //     const newFiles = files.map((file) => {
  //       let newKey = prefix
  //       if (prefix !== '' && prefix.substring(prefix.length - 1, prefix.length) !== '/') {
  //         newKey += '/'
  //       }
  //       newKey += file.name
  //       return {
  //         key: newKey,
  //         size: file.size,
  //         // modified: +Moment(),
  //       }
  //     })

  //     const uniqueNewFiles = []
  //     newFiles.map((newFile) => {
  //       let exists = false
  //       state.files.map((existingFile) => {
  //         if (existingFile.key === newFile.key) {
  //           exists = true
  //         }
  //       })
  //       if (!exists) {
  //         uniqueNewFiles.push(newFile)
  //       }
  //     })
  //     state.files = state.files.concat(uniqueNewFiles)
  //     return state
  //   })
  // }

  // handleRenameFolder = (oldKey, newKey) => {
  //   this.setState(state => {
  //     const newFiles = []
  //     state.files.map((file) => {
  //       if (file.key.substr(0, oldKey.length) === oldKey) {
  //         newFiles.push({
  //           ...file,
  //           key: file.key.replace(oldKey, newKey),
  //           // modified: +Moment(),
  //         })
  //       } else {
  //         newFiles.push(file)
  //       }
  //     })
  //     state.files = newFiles
  //     return state
  //   })
  // }
  // handleRenameFile = (oldKey, newKey) => {
  //   this.setState(state => {
  //     const newFiles = []
  //     state.files.map((file) => {
  //       if (file.key === oldKey) {
  //         newFiles.push({
  //           ...file,
  //           key: newKey,
  //           // modified: +Moment(),
  //         })
  //       } else {
  //         newFiles.push(file)
  //       }
  //     })
  //     state.files = newFiles
  //     return state
  //   })
  // }
  // handleDeleteFolder = (folderKey) => {
  //   this.setState(state => {
  //     const newFiles = []
  //     state.files.map((file) => {
  //       if (file.key.substr(0, folderKey.length) !== folderKey) {
  //         newFiles.push(file)
  //       }
  //     })
  //     state.files = newFiles
  //     return state
  //   })
  // }
  // handleDeleteFile = (fileKey) => {
  //   this.setState(state => {
  //     const newFiles = []
  //     state.files.map((file) => {
  //       if (file.key !== fileKey) {
  //         newFiles.push(file)
  //       }
  //     })
  //     state.files = newFiles
  //     return state
  //   })
  // }

  render() {
    return (
      <>
        <FileBrowser
          files={this.state.files}
          // icons={Icons.FontAwesome(4)}
          icons={{
            File: <FontAwesomeIcon icon={faFile} style={{ marginRight: '5px' }} />,
            Image: <FontAwesomeIcon icon={faImage} style={{ marginRight: '5px' }} />,
            PDF: <FontAwesomeIcon icon={faFilePdf} style={{ marginRight: '5px' }} />,
            Rename: <i className="i-cursor" aria-hidden="true" />,
            Folder: <FontAwesomeIcon icon={faFolder} style={{ marginRight: '5px' }} />,
            FolderOpen: <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px' }} />,
            Delete: <i className="trash" aria-hidden="true" />,
            Loading: <i className="circle-notch spin" aria-hidden="true" />,
          }}
        // canDownloadFile={true}
        // onCreateFolder={this.handleCreateFolder}
        // onCreateFiles={this.handleCreateFiles}
        // onMoveFolder={this.handleRenameFolder}
        // onMoveFile={this.handleRenameFile}
        // onRenameFolder={this.handleRenameFolder}
        // onRenameFile={this.handleRenameFile}
        // onDeleteFolder={this.handleDeleteFolder}
        // onDeleteFile={this.handleDeleteFile}
        />
      </>
    )
  }
}

