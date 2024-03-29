import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from "react-icons/md";
import { ProjectInner } from '../projects/ProjectElements';
import ProjectCard from '../projects/ProjectCard';
import img from '../../assets/projectimg1.png'
import img2 from '../../assets/projectimg2.png'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function TwentyTwenty() {

    const classes = useStyles();

    return (

        <div className={classes.root}>
      <Accordion defaultExpanded ="true">
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Projects - 2020</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <ProjectInner>
              <ProjectCard 
                    src={img2}
                    text="Project 1: Productivity Manager"
                    label="WSOC2001"
                    path="https://github.com/Open-Source-Community-VIT-AP/Productivity-tracker"
                />
              <ProjectCard 
                    src={img}
                    text="Project 2: Event Hub"
                    label="WSOC2002"
                    path="https://github.com/Open-Source-Community-VIT-AP/oschub"
                />
          </ProjectInner>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
    )
}

export default TwentyTwenty
