import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// MUI Icons
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// 3rd party
import SwipeableViews from 'react-swipeable-views';

// React Icons
import {AiFillStar} from 'react-icons/ai';
import {FaRegHeart} from 'react-icons/fa';
import {
    flexBetween,
    dFlex,
    carouselDot,
    fixedIcon,
    carouselImage,
    fixedBottom,
} from 'themes/commonStyles';
import './CarouselCard.css';

function CarouselCard({post}) {
    const [activeStep, setActiveStep] = React.useState(0);
    // So that we know how many dots are needed
    const maxSteps = post.locationImages.length;

    // Handler for the next photo (jumps when we click the next arrow)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Handler for the next photo (when we click the back arrow)
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Handle swipe change
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <Box
            className="carouselCard"
            sx={{
                flexGrow: 1,
                position: 'relative',
            }}
        >
            <Box sx={fixedIcon}>
                <FaRegHeart size={24} color="#fff"/>
            </Box>

            {post.locationImages.length && (
                <SwipeableViews
                    axis={'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {post.locationImages.map((step, index) => {
                        return (
                            <div key={step.id}>
                                <Box
                                    component="img"
                                    sx={carouselImage}
                                    src={step.url}
                                    alt={step.id}
                                ></Box>
                            </div>
                        );
                    })}
                </SwipeableViews>
            )}

            {/*  Will generate next/back functionality via buttons   */}
            <Box sx={fixedBottom}>
                <MobileStepper
                    sx={{backgroundColor: 'transparent'}}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            sx={carouselDot}
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            <KeyboardArrowRight/>
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            sx={carouselDot}
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            <KeyboardArrowLeft/>
                        </Button>
                    }
                />
            </Box>

            {/* Post Info */}
            <Box sx={flexBetween}>
                <Box sx={{mt: 2}}>
                    <Typography component="h3"> {post.location}</Typography>
                    <Typography component="h4"> {post.days}</Typography>
                    <Typography component="h5"> <b>{post.price}</b> night</Typography>
                </Box>

                <Box sx={{mt: 2}}>
                    <Box sx={dFlex}>
                        {post.isNew ? (
                            <React.Fragment>
                                <Typography component="h5">New</Typography>
                                <AiFillStar size={18}/>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography component="h5"> {post.rating}</Typography>
                                <AiFillStar size={18}/>
                            </React.Fragment>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CarouselCard;