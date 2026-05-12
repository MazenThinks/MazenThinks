import { useState, useEffect } from 'react';

/**
 * Cycles through `phrases` with a typewriter effect (type → pause → delete → next).
 */
export function useTypewriterCycle(phrases, options = {}) {
    const typingMs = options.typingMs ?? 42;
    const deletingMs = options.deletingMs ?? 28;
    const pauseAtFullMs = options.pauseAtFullMs ?? 2200;
    const pauseEmptyMs = options.pauseEmptyMs ?? 380;

    const [lineIndex, setLineIndex] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [mode, setMode] = useState('typing');

    const line = phrases[lineIndex] ?? '';

    useEffect(() => {
        let timer;

        if (mode === 'typing') {
            if (charCount < line.length) {
                timer = setTimeout(() => setCharCount((c) => c + 1), typingMs);
            } else {
                timer = setTimeout(() => setMode('pauseFull'), pauseAtFullMs);
            }
        } else if (mode === 'pauseFull') {
            timer = setTimeout(() => setMode('deleting'), 0);
        } else if (mode === 'deleting') {
            if (charCount > 0) {
                timer = setTimeout(() => setCharCount((c) => c - 1), deletingMs);
            } else {
                timer = setTimeout(() => {
                    setLineIndex((i) => (i + 1) % phrases.length);
                    setMode('typing');
                }, pauseEmptyMs);
            }
        }

        return () => clearTimeout(timer);
    }, [
        mode,
        charCount,
        line,
        line.length,
        phrases.length,
        typingMs,
        deletingMs,
        pauseAtFullMs,
        pauseEmptyMs,
    ]);

    return line.slice(0, charCount);
}
