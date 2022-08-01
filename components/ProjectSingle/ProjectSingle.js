
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Contact from './contact';
import RelatedProject from './related';


const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, psub1img1, psub1img2, desc, languages, tools, category, datec, type, projectlink, themepass }) => {

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <i className="fa fa-close"></i>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={onClose}>

                </DialogTitle>
                <Grid className="modalBody modal-body project-modal">
                    <div className="wpo-project-single-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-project-single-wrap">
                                        <div className="wpo-project-single-item">
                                            <div className="row align-items-center mb-5">
                                                <div className="col-lg-7">
                                                    <div className="wpo-project-single-title">
                                                        <h3>{title} Project</h3>
                                                    </div>
                                                    <p>{desc}</p>
                                               
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="wpo-project-single-content-des-right">
                                                        <ul>
                                                            <li>Project Type :<span>{type}</span></li>
                                                            <li>Date :<span>{datec}</span></li>
                                                            <li>Category :<span>{category}</span></li>
                                                            <li>Languages :<span>{languages}</span></li>
                                                            <li>Tools :<span>{tools}</span></li>
                                                            <li>project Url :<span><a target='_blank' href={projectlink }>click here</a></span></li>
                                                            <li>Admin or Theme Password :<span>{themepass}</span></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                    
                                            <div className="wpo-project-single-main-img">
                                                <div className="thumbnail">
                                                    <img src={pImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="wpo-project-single-gallery">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={psub1img1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={psub1img2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                           
                                        {/* <RelatedProject /> */}
                                        {/* <div className="wpo-project-single-item">
                                            <div className="wpo-project-contact-area">
                                                <div className="wpo-contact-title">
                                                    <h2>Have project in mind? Let's discuss</h2>
                                                    <p>Get in touch with us to see how we can help you with your project</p>
                                                </div>
                                                <div className="wpo-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ProjectSingle;

