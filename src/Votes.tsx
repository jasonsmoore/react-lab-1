import { useState } from 'react';

function Votes() {
    const [votedC, votedChoco] = useState(0);
    const [votedV, votedVan] = useState(0);
    const [votedS, votedStraw] = useState(0);
    const total = votedC + votedV + votedS;
    return (
        <div className='voteDesign'>
            <h2>Votes Here</h2>
            <div className='voteButtons'>
                <button onClick={() => votedChoco(votedC => { return votedC + 1 })}>Chocolate</button>
                <button onClick={() => votedVan(votedC => { return votedC + 1 })}>Vanilla</button>
                <button onClick={() => votedStraw(votedS => { return votedS +1 })}>Strawberry</button>
            </div>
                { total > 0 && 
                <div className='voteGraph'>
                    { votedC > 0 && 
                        <div>
                            <p className='treatType'>Chocolate: {votedC} ({Math.round((votedC / (total || 1)) * 100) + '%'}) </p>
                            <div className='graph chocolate' style={{width: votedC / total * 100 + '%'}}></div>
                        </div> } { votedC === 0 && <div className='noVote'>Chocolate has no votes!</div>}
                    { votedV > 0 && 
                        <div>  
                            <p className='treatType'>Vanilla: {votedV} ({Math.round((votedV / (total || 1)) * 100) + '%'})</p>
                            <div className='graph vanilla' style={{width: votedV / total * 100 + '%'}}></div>
                        </div> } { votedV === 0 && <div className='noVote'>Vanilla has no votes!</div>}
                    { votedS > 0 && 
                        <div>  
                            <p className='treatType'>Strawberry: {votedS} ({Math.round((votedS / (total || 1)) * 100) + '%'})</p>
                            <div className='graph strawberry' style={{width: votedS / total * 100 + '%'}}></div>
                        </div> } { votedS === 0 && <div className='noVote'>Strawberry has no votes!</div>}
                    </div>
                }
                <div className='noVotes'>
                    { total === 0 && <div>No votes yet!</div>}
                </div>
        </div>
    );
};

export default Votes; 