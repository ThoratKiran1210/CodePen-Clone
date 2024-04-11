import { useContext } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

// import Tags from 'react-tags';

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    // const [tags, setTags] = useState([]);


    // const suggestions = [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //   ];

    //   const handleDelete = (tagIndex) => {
    //     setTags(tags.filter((_, i) => i !== tagIndex));
    //   };
    
    //   const handleAddition = (tag) => {
    //     setTags([...tags, tag]);
    //   };

    return (
        <Container>
            <Editor 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Editor 
                language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />

        {/* <Tags
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        placeholder="Add Tags (e.g., HTML, CSS)"
      /> */}
        </Container>
    )
}

export default Code;