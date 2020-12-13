import logo from './logo.svg';
import './App.css';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

import Modele_de_lettre_de_contestation_des_PV_reçus_pour_deplacement_non_justifie_pendant_le_confinement from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/Modele_de_lettre_de_contestation_des_PV_reçus_pour_deplacement_non_justifie_pendant_le_confinement.pdf'
import brigade_affiche from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/brigade_affiche.pdf'
import covide_comment_faire_face_aux_controles from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/covide_comment_faire_face_aux_controles.pdf'
import tout_le_monde_peut_se_passer_de_la_police from './maxibib/Bibliotheque_Brigade_de_solidarité_populaire/tout_le_monde_peut_se_passer_de_la_police.pdf'
import SHOW_01 from './maxibib/Bibliotheque_Show/SHOW_01.pdf'
import SHOW_02 from './maxibib/Bibliotheque_Show/SHOW_02.pdf'
import SHOW_03 from './maxibib/Bibliotheque_Show/SHOW_03.pdf'

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400
  }
});
const data = {
  id: 'root',
  name: 'MaxiBib',
  children: [
    {
      id: '1',
      name: 'Bibliotheque_Brigade_de_solidarité_populaire',
      children: [
        {
          id: '11',
          name: 'brigade_affiche',
          link: brigade_affiche,
          size: 194134
        },
        {
          id: '12',
          name: 'covide_comment_faire_face_aux_controles',
          link: covide_comment_faire_face_aux_controles,
          size: 150397
        }
      ]
    },
    {
      id: '2',
      name: 'Show',
      children: [
        {
          id: '21',
          name: 'SHOW_01',
          link: SHOW_01,
          size: 24428450
        },
        {
          id: '22',
          name: 'SHOW_02',
          link: SHOW_02,
          size: 6820042
        },
        {
          id: '23',
          name: 'SHOW_03',
          link: SHOW_03,
          size: 17712114
        }
      ]
    }
  ]
};

function App() {
  const classes = useStyles();

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? (
        <div className="subfolders-container">
          {nodes.children.map(
            (node) =>
              !node.link ? (
                renderTree(node)
              ) : (
                  <a className="link" href={node.link}>
                    {node.name}<span>{'size :'} {node?.size} Bytes</span>
                  </a>
                )
          )}
        </div>
      ) : null}
    </TreeItem>
  );
  return (
    <>
      <h1>MaxiBib</h1>
      <div class="ui-tree"><TreeView
        className={classes.root}
        defaultCollapseIcon={<FolderIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<FolderOpenIcon />}>
        {renderTree(data)}
      </TreeView></div>
    </>
  );
}

export default App;
