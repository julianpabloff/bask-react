import './style.css';

interface ExitButtonProps {
    onExit: () => void;
}

export default function ExitButton({ onClick }): ExitButtonProps {
    const primary = 'var(--bask-blue)';
    const secondary = 'var(--bask-purple)';

    return (
        <div className="exit-button" onClick={() => {console.log(onClick)}}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.13 508.83"> */}
            {/*     <path d="M452.86,0l-187.54,249.33,194.81,259.5h-68.33l-162.83-219.52L66.15,508.83H0L194.81,249.33,7.27,0H74.87L230.43,209.35,385.98,0h66.88Z" style={{fill: primary}}></path> */}
            {/* </svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.13 508.83"> */}
            {/*     <path d="M452.86,0l-187.54,249.33,194.81,259.5h-68.33l-162.83-219.52L66.15,508.83H0L194.81,249.33,7.27,0H74.87L230.43,209.35,385.98,0h66.88Z" style={{fill: secondary}}></path> */}
            {/* </svg> */}
        </div>
    );
}
