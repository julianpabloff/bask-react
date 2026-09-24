interface useAnimateInOutReturn {
    in: () => void;
    out: () => void;
}

interface inOutOptions {
    inDelay: number // wait to fade in
}

export default function useAnimateInOut(ref: any, display: string, transition: number, options?: inOutOptions): useAnimateInOutReturn {
    let inDelay = 0;
    if (options) {
        inDelay = options.inDelay ? options.inDelay : 0;
    }

    const inFunction = () => {
        if (!ref.current) return;
        ref.current.style.display = display;
        setTimeout(() => ref.current.style.opacity = '1', inDelay + 10);
    };

    const outFunction = () => {
        if (!ref.current) return;
        ref.current.style.opacity = '0';
        setTimeout(() => ref.current.style.display = 'none', transition + 10);
    };

    return { in: inFunction, out: outFunction };
}
