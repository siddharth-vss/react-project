import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';
const Prime = () => {


    const Keydown = (e) =>{
          console.log(e.code, e.key);
          setPressed(true);
          if( e.code === 'Space'){
            setValue('space');
            return;
          }
          setValue(e.key);
    }
    const [value, setValue] = useState('');
    const [pressed, setPressed] = useState(false);
    const [bindKeyup, unbindKeyup] = useEventListener({
        type: "keyup",
        listener:(e) =>{
            setPressed(false);
        }
});

    const [bindKeydown, unbindKeydown] = useEventListener({
        type: "keydown",
        listener: (e) =>{
            Keydown(e);
        }       
    });


    useEffect(() => {
      bindKeydown();
      bindKeyup();
      return () => {
        bindKeydown();
      bindKeyup();
      };
    }, [bindKeyup, unbindKeyup,  bindKeydown, unbindKeydown])
    return (
        <>
            <div className="card flex flex-column align-items-center gap-3">
                <button
                    className={classNames('card border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                    style={{
                        background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                        transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                    }}>
                    {value.toUpperCase() || 'Press a Key'}
                </button>
            </div>
        </>
    )
}

export default Prime
