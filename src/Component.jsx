

import { Bracket, RoundProps, Seed, SingleLineSeed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
import React from 'react';

const rounds: RoundProps[] = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
    ],
  },
  {
    title: 'Round one',
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
];


const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }: RenderSeedProps) => {


  const isLineConnector = rounds[roundIndex].seeds.length === rounds[roundIndex + 1]?.seeds.length;

  const Wrapper = isLineConnector ? SingleLineSeed : Seed;


  return (
    <>
      {/* <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 10 }}>
        <SeedItem style={{ borderRadius: '18px' }}>
          <div>
            <SeedTeam style={{ color: 'red' }} >  {seed.id}  {seed.teams[0]?.name || 'NO TEAM '} </SeedTeam>
            <br></br>
            <SeedTeam  >  {seed.id}  {seed.teams[1]?.name || 'NO TEAM '} </SeedTeam>
          </div>
        </SeedItem>
      </Wrapper> */}

      <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem tem style={{ borderRadius: '18px' }}>
          <div style={{ display: 'flex',height:"100px" }}>
            <div >
              <SeedTeam style={{ color: 'white' }} >  <p className="number" >{seed.id}</p>  {seed.teams[0]?.name || 'NO TEAM '} </SeedTeam>
              <br style={{height:"20px",border:'12px dotted red'}}></br>
              <SeedTeam style={{display:'flex'}}  > <p className="number" >{seed.id}</p>   {seed.teams[1]?.name || 'NO TEAM '} </SeedTeam>
            </div>
          </div>
        </SeedItem>
      </Wrapper>
      <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem tem style={{ borderRadius: '18px' }}>
          <div style={{ display: 'flex',height:"100px" }}>
            <div >
              <SeedTeam style={{ color: 'white' }} >  <p className="number" >{seed.id}</p>  {seed.teams[0]?.name || 'NO TEAM '} </SeedTeam>
              <br style={{height:"20px",border:'12px dotted red'}}></br>
              <SeedTeam style={{display:'flex'}}  > <p className="number" >{seed.id}</p>   {seed.teams[1]?.name || 'NO TEAM '} </SeedTeam>
            </div>
          </div>
        </SeedItem>
      </Wrapper>
      <Wrapper mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem tem style={{ borderRadius: '18px' }}>
          <div style={{ display: 'flex',height:"100px" }}>
            <div >
              <SeedTeam style={{ color: 'white' }} >  <p className="number" >{seed.id}</p>  {seed.teams[0]?.name || 'NO TEAM '} </SeedTeam>
              <br style={{height:"20px",border:'12px dotted red'}}></br>
              <SeedTeam style={{display:'flex'}}  > <p className="number" >{seed.id}</p>   {seed.teams[1]?.name || 'NO TEAM '} </SeedTeam>
            </div>
          </div>
        </SeedItem>
      </Wrapper>  
    </>

  );
};

const Component = () => {
  //....
  return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
};
export default Component;