import React from 'react';
import ButtonAndCircle from './map_button';
import Line, {Rotated_Line, Arrow_Line1, Arrow_Line2, Arrow_Line3} from  './map_line'

function RoundedSquare(){
    const button_top = '37%';
    const first_arrow = '45%';
    const second_arrow = '30%';

    return (
        <div style={{ 
            width: '337px', 
            height: '307px', 
            borderRadius: '20px', 
            backgroundColor: '#282828',
            boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.5)',
            position: 'relative',
        }}>
            {/* first button */}
            <div style={{ 
                position: 'absolute',
                top: button_top, 
                left: '13%', 
            }}>
                <ButtonAndCircle />
            </div>
            
            {/* second button */}
            <div style={{ 
                position: 'absolute',
                top: button_top, 
                left: '32%', 
            }}>
                <ButtonAndCircle />
            </div>
            
            {/* third button */}
            <div style={{ 
                position: 'absolute',
                top: button_top, 
                left: '60%', 
            }}>
                <ButtonAndCircle />
            </div>

            {/* fourth button */}
            <div style={{ 
                position: 'absolute',
                top: '20%', 
                left: '78.5%', 
            }}>
                <ButtonAndCircle />
            </div>
            
            {/* Main Line */}
            <div style={{ 
                position: 'absolute',
                top: '38.4%', 
                left: '13.4%', 
            }}>
                <Line />
            </div>

            {/* Rotated Line */}
            <div style={{ 
                position: 'absolute',
                top: '31%', 
                left: '73%', 
            }}>
                <Rotated_Line />
            </div>

            {/* Arrow Line 1 */}
            <div style={{ 
                position: 'absolute',
                top: '37.5%', 
                left: first_arrow, 
            }}>
                <Arrow_Line1 />
            </div>

            {/* Arrow Line 2 */}
            <div style={{ 
                position: 'absolute',
                top: '40%', 
                left: first_arrow, 
            }}>
                <Arrow_Line2 />
            </div>

            {/* Arrow Line 3 */}
            <div style={{ 
                position: 'absolute',
                top: second_arrow, 
                left: '77.5%', 
            }}>
                <Arrow_Line3 />
            </div>

            {/* Arrow Line 4 */}
            <div style={{ 
                position: 'absolute',
                top: second_arrow, 
                left: '80%', 
            }}>
                <Arrow_Line1 />
            </div>

            {/* Clark Text */}
            <div style={{ 
                position: 'absolute',
                top: '10%', 
                left: '54%', 
                color: 'white',
                fontSize: '15px',
            }}>
                Clark & Devon
            </div>

            {/* Sheridan Text */}
            <div style={{ 
                position: 'absolute',
                top: '65%', 
                left: '-5%', 
                color: 'white',
                fontSize: '15px',
                transform: 'rotate(270deg)', 
            }}>
                Sheridan & Loyola
            </div>

            {/* Devon & Kedzie Text */}
            <div style={{ 
                position: 'absolute',
                top: '63%', 
                left: '17%', 
                color: 'white',
                fontSize: '15px',
                transform: 'rotate(270deg)', 
            }}>
                Devon & Kedzie
            </div>

            {/* Devon & Rockwell Text */}
            <div style={{ 
                position: 'absolute',
                top: '65%', 
                left: '43%', 
                color: 'white',
                fontSize: '15px',
                transform: 'rotate(270deg)', 
            }}>
                Devon & Rockwell
            </div>

        </div>
    );
}
  


export default RoundedSquare;
