import { useEffect, useState } from 'react';

type Props = {
    label: string;
    percentage: number;
}

const GradientProgressBar = ({ label, percentage }: Props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Animate progress bar fill to the target percentage
        const timeout = setTimeout(() => setWidth(percentage), 100);
        return () => clearTimeout(timeout);
    }, [percentage]);

    return (
        <div style={{ marginBottom: 16, fontFamily: 'Inter, sans-serif', color: '#ccc' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4, opacity: 0.6 }}>
                <span>{label.toUpperCase()}</span>
                <span>{percentage}%</span>
            </div>
            <div
                style={{
                    height: 6,
                    backgroundColor: '#2c2c3a', // dark background bar
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        width: `${width}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', // blue to violet gradient
                        borderRadius: 4,
                        transition: 'width 1.2s ease-out',
                    }}
                />
            </div>
        </div>
    );
};

export default GradientProgressBar;