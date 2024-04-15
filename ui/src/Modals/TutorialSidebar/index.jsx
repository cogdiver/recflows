import { Wrapper } from './styles'
import { Context } from '../../Context'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'


const TutorialSidebar = () => {
  const { showTutorial, handleCloseTutorial, dataTutorial } = Context()
  const { name, content } = dataTutorial

  return  <Wrapper expanded={showTutorial}>
    <div className="title">
      <img
        src="assets/collapse-right.svg"
        alt="Close Tutorial"
        className="icon-close-tutorial"
        onClick={handleCloseTutorial}
      />
      <strong className="name">{name}</strong>
    </div>

    <Markdown className="content" >
      {content}
    </Markdown>

  </Wrapper>
}

export { TutorialSidebar }
