import { Dithering } from '@paper-design/shaders-react';

export default function GeneratedBackground() {
    return (
        <Dithering
            colorBack="#00000000"
            colorFront="#888"
            speed={0.4}
            shape="swirl"
            type="8x8"
            pxSize={4}
            scale={1.56}
            frame={747933.9080000629}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,             // stay behind everything else
                backgroundColor: '#000000'
        }}
    />
    );
}
