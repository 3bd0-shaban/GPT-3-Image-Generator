import { useEffect, useState } from 'react';


const useBreakpoint = () => {
    const breakpoints = {
        0: 'xs',
        500: 'sm',
        680: 'md',
        952: 'lg',
        1150: 'xl',
        1300: 'xxl',
        1500: 'xxxl',
    };
    const [breakpoint, setBreakPoint] = useState('');
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        if (0 < windowSize.width && windowSize.width < 500) {
            setBreakPoint(breakpoints[0]); //xs mbile
        }
        if (500 < windowSize.width && windowSize.width < 680) {
            setBreakPoint(breakpoints[500]); //sm
        }
        if (680 < windowSize.width && windowSize.width < 952) {
            setBreakPoint(breakpoints[680]); //md
        }
        if (952 < windowSize.width && windowSize.width < 1150) {
            setBreakPoint(breakpoints[952]); //lg
        }
        if (1150 < windowSize.width && windowSize.width < 1300) {
            setBreakPoint(breakpoints[1150]); //xl
        }
        if (1300 < windowSize.width && windowSize.width < 1500) {
            setBreakPoint(breakpoints[1300]); //xxl
        }
        if (windowSize.width >= 1500) { //xxxl
            setBreakPoint(breakpoints[1500]);
        }
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, [windowSize.width]);

    const MobileView = (breakpoint === 'xs') || (breakpoint === 'sm') || (breakpoint === 'md') || (breakpoint === 'lg')
    return { breakpoint, MobileView };
};

export default useBreakpoint;