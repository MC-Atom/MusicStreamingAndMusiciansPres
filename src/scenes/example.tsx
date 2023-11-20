import { Img, Line, Rect, Shape, Spline, Txt } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { easeInCubic, easeInOutCubic, easeInOutElastic, easeOutCubic, map, tween } from '@motion-canvas/core/lib/tweening';
import { Reference, beginSlide, createRef } from '@motion-canvas/core/lib/utils';

import spotifyLogo from '../../assets/Spotify_icon.svg'
import appleLogo from '../../assets/apple-music.svg'
import ytMusicLogo from '../../assets/youtube-music.svg'
import tiktokLogo from '../../assets/tiktok.svg'
import youtubeLogo from '../../assets/youtube.svg'
import clouds from '../../assets/clouds.svg'
import spotifyDiscord from '../../assets/spotifyDiscord.png'
import spotifyWrapped from '../../assets/spotifyWrapped.jpeg'
import referenceQR from '../../assets/ReferenceQR.png'
import { Vector2 } from '@motion-canvas/core/lib/types';
import { createSignal } from '@motion-canvas/core/lib/signals';

export default makeScene2D(function* (view) {


  const sideLines = createRef<Rect>();
  const sideLine1 = createRef<Rect>();
  const sideLine2 = createRef<Rect>();
  const sideLine3 = createRef<Rect>();
  const sideLine4 = createRef<Rect>();
  
  view.add(
    <Rect ref={sideLines} rotation={30}>
      <Rect ref={sideLine1} fill={'#9F2B68'} size={[800,60]} position={[400,-720]}/>
      <Rect ref={sideLine2} fill={'#9F2B68'} size={[800,20]} position={[490,-850]}/>
      <Rect ref={sideLine3} fill={'#9F2B68'} size={[800,60]} position={[-400,720]}/>
      <Rect ref={sideLine4} fill={'#9F2B68'} size={[800,20]} position={[-490,850]}/>
    </Rect>
    );

    const sideLines2 = createRef<Rect>();
    const sideLine5 = createRef<Rect>();
    const sideLine6 = createRef<Rect>();
    const sideLine7 = createRef<Rect>();
    const sideLine8 = createRef<Rect>();
    
    view.add(
      <Rect ref={sideLines2} rotation={60} scale={1.4}>
        <Rect ref={sideLine5} fill={'#22c55a'} size={[60,800]} position={[-720,400]}/>
        <Rect ref={sideLine6} fill={'#22c55a'} size={[20, 800]} position={[-850,490]}/>
        <Rect ref={sideLine7} fill={'#22c55a'} size={[60, 800]} position={[720,-400]}/>
        <Rect ref={sideLine8} fill={'#22c55a'} size={[20, 800]} position={[850,-490,]}/>
      </Rect>
      );

  const title = createRef<Txt>();
  const subTitle = createRef<Txt>();
  view.add(
  <Rect>
    <Txt ref={title} fontSize={180} fontFamily='FallingSky' fill={"#ffffff"} 
    textAlign='center' lineHeight={180} position={[0,-160]}/>

    <Txt ref={subTitle} fontSize={150} fontFamily='FallingSky' fill={"#ffffff"} 
    textAlign='center' lineHeight={160} position={[0,80]}/>
  </Rect>
  );

  

  title().text("MUSIC STREAMING");
  subTitle().text("and the \n Musician's Middle Class");

  
  
  yield* beginSlide('MSS Definition');
  
  yield title().text("Music Streaming Services",0.6)
  yield subTitle().text("",0.6)
  yield* tween(0.6,value => {
    title().position.y(map(-160,-300,easeInOutCubic(value))),
    title().position.x(map(0,100,easeInOutCubic(value))),
    title().fontSize(map(180,150,easeInOutCubic(value))),
    sideLines().scale(map(1,1.4,easeInOutCubic(value))),
    sideLines2().scale(map(1.4,1,easeInOutCubic(value)))
  })

  yield* beginSlide('MSS Def Box');

  const defBox = createRef<Rect>();
  const definitionTxt = createRef<Txt>();
  view.add(
    <Rect ref={defBox} size={[1200,350]} fill={'#141414'} radius={60} 
    layout padding={20}>
      <Txt ref={definitionTxt} fontSize={60} fontFamily='FallingSky' fill={"#ffffff"} 
    textAlign='center' lineHeight={95} position={[0,-140]} size={[1500,450]} textWrap={true}
    />
    </Rect>
  );
  yield definitionTxt().text("Easy access to a large database of music for free or a fixed price regardless of how much you listen (Hesmondhalgh 2021)",1.5);
  yield* tween(1.5, value => {
    defBox().size.x(easeOutCubic(value,0,1500))
  })

  yield* beginSlide('Shrink Def Box');

  yield title().text("MSS",1);
  yield definitionTxt().text("Large database of music \n Free or fixed price \n Unlimited listens",0.5);
  yield defBox().size.x(630,1)
  yield defBox().size.y(315,1)
  yield defBox().padding(10,1)
  yield definitionTxt().fontSize(53,1)
  yield* tween(1.5, value => {
    title().position.x(easeInOutCubic(value,100,-300))
    title().fontSize(easeInOutCubic(value,150,190))
    defBox().position.x(easeInOutCubic(value,0,400))
    defBox().position.y(easeInOutCubic(value,0,-350))
  })
  
  yield* beginSlide('First Set Examples');

  const spotify = createRef<Img>();
  const apple = createRef<Img>();
  const ytMusic = createRef<Img>();
  const tiktok = createRef<Img>();
  const youtube = createRef<Img>();

  view.add(
    <Rect>
      <Img ref={spotify} src={spotifyLogo} scale={2} position={[-500,1400]}/>
      <Img ref={apple} src={appleLogo} scale={2} position={[0,1400]}/>
      <Img ref={ytMusic} src={ytMusicLogo} scale={2} position={[500,1400]}/>
      <Img ref={tiktok} src={tiktokLogo} scale={2} position={[-250,1700]}/>
      <Img ref={youtube} src={youtubeLogo} scale={1.8} position={[285,1700]}/>
    </Rect>
  )

  yield tween(1, value => {
    spotify().position.y(easeInOutCubic(value,1400,0))
  })
  yield* waitFor(0.2)
  yield tween(1, value => {
    apple().position.y(easeInOutCubic(value,1400,0))
  })
  yield* waitFor(0.2)
  yield* tween(1, value => {
    ytMusic().position.y(easeInOutCubic(value,1400,0))
  })

  yield* beginSlide('Second Set Examples');

  yield tween(1, value => {
    tiktok().position.y(easeInOutCubic(value,1700,300))
  })
  yield* waitFor(0.2)
  yield* tween(1, value => {
    youtube().position.y(easeInOutCubic(value,1700,300))
  })

  /* 
  * Middle Class
  */

  yield* beginSlide('Musician Middle Class Trans');

  sideLines().children().forEach(child => {
    (child as Txt).fill('#ffb017')
  })

  yield tween(0.6,value => {
    sideLines2().scale(map(1,1.4,easeInOutCubic(value)))
  })

  const MssSceneStuff: Reference<Shape>[] = [tiktok,youtube,spotify,apple,ytMusic,defBox];
  for (let i = 0; i < MssSceneStuff.length; i++){
    let node = MssSceneStuff[i];
    const initPos = node().position.y()
    yield tween(0.6, value => {node().position.y(easeInCubic(value, initPos, initPos + 1400))})
    yield* waitFor(0.05);
  }

  yield tween(0.6,value => {
    sideLines().scale(map(1.4,1,easeInOutCubic(value)))
  })
  yield title().fontSize(150, 1)
  yield title().position.x(-150, 1)
  yield* title().text("Musician Middle Class", 1)

  yield* beginSlide('Musician MidClass Def Box');

  const musDefBox = createRef<Rect>();
  const musDefTxt = createRef<Txt>();
  view.add(
    <Rect ref={musDefBox} size={[1200,350]} fill={'#141414'} radius={60} 
    layout padding={20}>
      <Txt ref={musDefTxt} fontSize={60} fontFamily='FallingSky' fill={"#ffffff"} 
    textAlign='center' lineHeight={95} position={[0,-140]} size={[1500,450]} textWrap={true}
    />
    </Rect>
  );
  yield musDefTxt().text("Music artists that make a substantial amount of money off of music but are not \"Superstars\" with big teams and labels behind them.",1.5);
  yield* tween(1.5, value => {
    musDefBox().size.x(easeOutCubic(value,0,1500))
  })

  yield* beginSlide('Mus Def Colapse');
  yield tween(0.8, value => {
    musDefBox().size.x(easeInCubic(value,1500,0))
    musDefBox().padding(easeInCubic(value,30,0))
  })
  yield musDefTxt().text("",0.8);
  
  yield* waitFor(0.4);


  const scale = createSignal(1);
  
  const graph = createRef<Rect>();
  const xAxis = createRef<Line>();
  const yAxis = createRef<Line>();
  const graphLine = createRef<Spline>();
  const yAxisLable = createRef<Txt>();

  const amatureLine = createRef<Rect>();
  const middleClassLine = createRef<Rect>();
  const superstarLine = createRef<Rect>();
  const amatureLabel = createRef<Txt>();
  const middleClassLabel = createRef<Txt>();
  const superstarLabel = createRef<Txt>();

  const disclamer = createRef<Txt>();

  view.add(
    <Rect ref={graph} position={[-600,300]}>
      <Line stroke={"#ffb017"} lineWidth={6} endArrow arrowSize={30} ref={xAxis} 
      points={[Vector2.zero, () => Vector2.right.scale(scale() * 1000)]} />

      <Line stroke={"#ffb017"} lineWidth={12} endArrow arrowSize={30} ref={yAxis} 
      points={[Vector2.zero, () => Vector2.down.scale(scale() * 500)]} />

      <Spline stroke={"#ff0000"} lineWidth={10} endArrow arrowSize={15} smoothness={0.3} ref={graphLine}
      points={[[0,-0],[600,-20],[850,-60],[900,-120],[1000,-500]]}/>

      <Txt ref={yAxisLable} rotation={-90} fill={'#ffffff'} fontFamily='FallingSky' position={[-50,-250]}/>
    
      <Rect ref={superstarLine} fill={"#ffd030"} size={[0,10]} position={[925, 50]}/>
      <Rect ref={middleClassLine} fill={"#20b020"} size={[0,10]} position={[755, 70]}/>
      <Rect ref={amatureLine} fill={"#5080e0"} size={[0,10]} position={[315, 50]}/>

      <Txt ref={amatureLabel} fontSize={45} fill={'#ffffff'} fontFamily='FallingSky' position={[315,100]}/>
      <Txt ref={middleClassLabel} fill={'#ffffff'} fontFamily='FallingSky' position={[755,120]}/>
      <Txt ref={superstarLabel} fontSize={45} fill={'#ffffff'} fontFamily='FallingSky' position={[1000,100]}/>

      <Txt ref={disclamer} fontSize={45} fill={'#ffffff'} fontFamily='FallingSky' position={[1500,170]} offset={[1,0]}/>
    </Rect>
  )

  yield tween(0.6, value => {
    scale(easeInCubic(value,0,1))
  })
  yield tween(1.4, value => {
    graphLine().end(easeInOutCubic(value,0,1));
  })

  yield* waitFor(0.5);
  yield yAxisLable().text("Revenue",0.5);

  yield tween(0.8, value => {
    superstarLine().size.x(easeInOutCubic(value,0,90))
    amatureLine().size.x(easeInOutCubic(value,0,640))
  })
  yield amatureLabel().text("Amateur",0.5);
  yield superstarLabel().text("Superstar",0.5);
  yield yAxisLable().text("Revenue",0.5);

  yield* waitFor(0.5);
  yield tween(0.8, value => {
    middleClassLine().size.x(easeInOutCubic(value,0,250))
  })
  yield middleClassLabel().text("Middle Class",0.8);
  yield* waitFor(0.2);
  yield* disclamer().text("*Not Real Data",0.8);

  yield* beginSlide('Graph Out');

  yield yAxisLable().text("",0.5);
  yield amatureLabel().text("",0.5);
  yield superstarLabel().text("",0.5);
  yield middleClassLabel().text("",0.5);
  yield disclamer().text("",0.5);

  yield* tween(0.8, value => {
    superstarLine().size.x(easeInOutCubic(value,90,0))
    middleClassLine().size.x(easeInOutCubic(value,250,0))
    amatureLine().size.x(easeInOutCubic(value,640,0))
    scale(easeInCubic(value,1,0))
    graphLine().end(easeInOutCubic(value,1,0))
  })

  sideLines2().children().forEach(child => {
    (child as Txt).fill('#ffffff')
  })

  yield tween(0.6,value => {
    sideLines().scale(map(1,1.4,easeInOutCubic(value)))
  })

  yield tween(0.6,value => {
    sideLines2().scale(map(1.4,1,easeInOutCubic(value)))
    title().position.x(easeInOutCubic(value,-150,150))
  })

  yield* title().text("Music Industry Growth",1);

  const scale2 = createSignal(1);
  
  const graph2 = createRef<Rect>();
  const xAxis2 = createRef<Line>();
  const yAxis2 = createRef<Line>();
  const yAxisLable2 = createRef<Txt>();

  let musicRev = [25.2, 23.4, 24.4, 22.6, 21, 20.8, 20.1, 19.4, 18.2, 16.9, 15.8, 14.9, 14.8, 14.9, 14.6, 14.2, 14.7, 16, 17.3, 18.9, 21.5, 23.1, 28.8]
  const graphTitle = createRef<Txt>();

  view.add(
    <Rect ref={graph2} position={[-600,300]}>
      <Line stroke={"#ffffff"} lineWidth={6} endArrow arrowSize={30} ref={xAxis2} 
      points={[Vector2.zero, () => Vector2.right.scale(scale2() * 1200)]} />

      <Line stroke={"#ffffff"} lineWidth={12} endArrow arrowSize={30} ref={yAxis2} 
      points={[Vector2.zero, () => Vector2.down.scale(scale2() * 500)]} />
      <Txt ref={yAxisLable2} fontSize={45} rotation={-90} fill={'#ffffff'} fontFamily='FallingSky' position={[-50,-250]}/>

      <Txt ref={graphTitle} fontSize={45} fill={'#ffffff'} fontFamily='FallingSky' position={[650,-500]} />
    </Rect>
  )

  yield tween(0.6, value => {
    scale2(easeInCubic(value,0,1))
  })

  let musicRevBarsScale = 18;
  let musicRevBars: Reference<Rect>[] = []
  let musicRevText: Reference<Txt>[] = []
  for (let i = 0; i < musicRev.length; i++){
    let info = musicRev[i];
    let node = createRef<Rect>();
    let nodeText = createRef<Txt>();
    view.add(
      <Rect>
        <Rect ref={node} fill={'#33a6ff'} size={[(1000 - 200) / musicRev.length, info * musicRevBarsScale]} offset={[0,1]} position={[(1150 / musicRev.length) * i - 550, 295]} />
        <Txt ref={nodeText} fontSize={40} rotation={-90} fill={'#ffffff'} fontFamily='FallingSky' position={[(1150 / musicRev.length) * i - 550, 360]}/>
      </Rect>
      )
    musicRevBars.push(node);
    musicRevText.push(nodeText);
    yield tween(0.6, value => {node().size.y(easeInCubic(value, 0, info * musicRevBarsScale))})
    yield nodeText().text((1999 + i).toString(), 0.6)
    yield* waitFor(0.02);
  }

  yield disclamer().offset.x(-1,0);
  yield disclamer().position.x(-200,0);
  yield graphTitle().text("Global recorded music revenue from 1999 to 2021",0.6);
  yield disclamer().text("* Statistics from Statista",0.6);
  yield* yAxisLable2().text("Revenue (Billion $)",0.6);


  yield* beginSlide('Music Industry Growth');

  for (let i = 0; i < musicRevBars.length; i++){
    let node = musicRevBars[i];
    let nodeText = musicRevText[i];
    yield musicRevBars[i]().scale.y(0,0.6);
    yield musicRevText[i]().text("",0.6);
    yield* waitFor(0.02);
  }

  yield graphTitle().text("",0.6);
  yield* yAxisLable2().text("",0.6);
  

  let musicSubs = [8,13,20,28,41,68,112,176,225,341,443,523];
  let musicSubsBarsScale = 0.9;
  let musicSubsBars: Reference<Rect>[] = []
  let musicSubsText: Reference<Txt>[] = []
  for (let i = 0; i < musicSubs.length; i++){
    let info = musicSubs[i];
    let node = createRef<Rect>();
    let nodeText = createRef<Txt>();
    view.add(
      <Rect>
        <Rect ref={node} fill={'#f29766'} size={[(1000 - 200) / musicSubs.length, info * musicSubsBarsScale]} offset={[0,1]} position={[(1150 / musicSubs.length) * i - 550, 295]} />
        <Txt ref={nodeText} fontSize={40} rotation={-90} fill={'#ffffff'} fontFamily='FallingSky' position={[(1150 / musicSubs.length) * i - 550, 360]}/>
      </Rect>
      )
    musicSubsBars.push(node);
    musicSubsText.push(nodeText);
    yield tween(0.6, value => {node().size.y(easeInCubic(value, 0, info * musicSubsBarsScale))})
    yield nodeText().text((2010 + i).toString(), 0.6)
    yield* waitFor(0.02);
  }

  yield graphTitle().text("Number of paying online music service subscribers worldwide",0.6);
  yield* yAxisLable2().text("Number in Millions",0.6);

  yield* beginSlide('Both Graph');

  for (let i = 0; i < musicSubsBars.length; i++){
    let node = musicSubsBars[i];
    let nodeText = musicSubsText[i];
    yield musicSubsBars[i]().scale.y(0,0.6);
    yield musicSubsText[i]().text("",0.6);
    yield* waitFor(0.02);
  }

  yield graphTitle().text("",0.6);
  yield* yAxisLable2().text("",0.6);


  musicRevBarsScale = 18;
  musicSubsBarsScale
  musicRevBars = [];
  musicRevText = [];
  musicSubs = [0,0,0,0,0,0,0,0,0,0,0,8,13,20,28,41,68,112,176,225,341,443,523];
  for (let i = 0; i < musicRev.length; i++){
    let info = musicRev[i];
    let node = createRef<Rect>();
    let nodeText = createRef<Txt>();
    let info2 = musicSubs[i];
    let node2 = createRef<Rect>();
    view.add(
      <Rect>
        <Rect ref={node} fill={'#33a6ff'} size={[(1000 - 200) / musicRev.length / 2, info * musicRevBarsScale]} offset={[1,1]} position={[(1150 / musicRev.length) * i - 550, 295]} />
        <Rect ref={node2} fill={'#f29766'} size={[(1000 - 200) / musicSubs.length /2, info2 * musicSubsBarsScale]} offset={[-1,1]} position={[(1150 / musicSubs.length) * i - 550, 295]} />
        <Txt ref={nodeText} fontSize={40} rotation={-90} fill={'#ffffff'} fontFamily='FallingSky' position={[(1150 / musicRev.length) * i - 550, 360]}/>
      </Rect>
      )
    musicRevBars.push(node);
    musicRevBars.push(node2);
    musicRevText.push(nodeText);
    yield tween(0.6, value => {node().size.y(easeInCubic(value, 0, info * musicRevBarsScale))})
    yield tween(0.6, value => {node2().size.y(easeInCubic(value, 0, info2 * musicSubsBarsScale))})
    yield nodeText().text((1999 + i).toString(), 0.6)
    yield* waitFor(0.02);
  }

  //yield graphTitle().text("Global recorded music revenue from 1999 to 2021",0.6);
  //yield* yAxisLable2().text("Revenue (Billion $)",0.6);
  yield* waitFor(0.6);

  /**
   * Context Music
   */

  yield* beginSlide('Both Graph Out');

  yield tween(0.6, value => {
    scale2(easeInCubic(value,1,0))
  })
  yield disclamer().text("",0.6);

  for (let i = 0; i < musicRevBars.length; i++){
    let node = musicRevBars[i];
    let nodeText = musicRevText[i];
    yield musicRevBars[i]().scale.y(0,0.6);
    if (nodeText != null) yield musicRevText[i]().text("",0.6);
    yield* waitFor(0.01);
  }

  sideLines().children().forEach(child => {
    (child as Txt).fill('#33a6ff')
  })

  yield tween(0.6,value => {
    sideLines2().scale(map(1,1.4,easeInOutCubic(value)))
  })

  yield tween(0.6,value => {
    sideLines().scale(map(1.4,1,easeInOutCubic(value)))
  })
  yield title().fontSize(150, 1)
  yield title().position.x(-150, 1)
  yield* title().text("Diversifying Music", 1)

  const contextMusic = createRef<Txt>();

  view.add(
    <Txt ref={contextMusic} fontSize={70} fill={'#ffffff'} fontFamily='FallingSky' offset={[-1,-1]} lineHeight={120}
    position={[-800,-150]}/>
  )

  yield* beginSlide('Slide Text');

  yield* contextMusic().text("○ Concentrated Listening \n○ Context Based Music \n○ Background Music ",0.6)

  /**
   * Algorithms
   */

  yield* beginSlide('Algorithms');

  yield* contextMusic().text("",0.6)

  yield title().text("Algorithms",1)
  yield subTitle().text("",1)
  yield title().position.x(150, 1)
  sideLines2().children().forEach(child => {
    (child as Txt).fill('#795548')
  })
  yield* tween(1  ,value => {
    sideLines().scale(map(1,1.4,easeInOutCubic(value))),
    sideLines2().scale(map(1.4,1,easeInOutCubic(value)))
  })

  const listener = createRef<Txt>();
  const listener2 = createRef<Txt>();
  view.add(
    <Rect>
      <Txt ref={listener} fontSize={70} fill={'#ffffff'} fontFamily='FallingSky' offset={[-1,-1]} lineHeight={120}
      position={[-720,330]}/>
      <Txt ref={listener2} fontSize={70} fill={'#ffffff'} fontFamily='FallingSky' offset={[-1,-1]} lineHeight={120}
      position={[170,330]}/>
    </Rect>
  )

  yield* beginSlide('Algorithm Text1');

  const cloudBox = createRef<Rect>();

  view.add(
    <Rect ref={cloudBox} opacity={0}>
      <Img src={clouds} scale={10} position={[-100,200]}/>
      <Txt fontSize={40} fill={'#ffffff'} fontFamily='FallingSky' offset={[-1,-1]} lineHeight={120}
      position={[-708,-70]}>Known Music</Txt>
      <Txt fontSize={40} fill={'#ffffff'} fontFamily='FallingSky' offset={[-1,-1]} lineHeight={120}
      position={[158,-70]}>Known Music</Txt>
    </Rect>
  )

  yield cloudBox().opacity(1,0.6)
  yield listener().text("Listener",0.6)
  yield* listener2().text("Listener",0.6)

  /**
   * Community Building
   */ 

  yield* beginSlide('Social Groups');

  yield cloudBox().opacity(0,0.6)
  yield listener().text("",0.6)
  yield* listener2().text("",0.6)

  sideLines().children().forEach(child => {
    (child as Txt).fill('#ff0000')
  })

  yield tween(0.6,value => {
    sideLines2().scale(map(1,1.4,easeInOutCubic(value)))
  })

  yield tween(0.6,value => {
    sideLines().scale(map(1.4,1,easeInOutCubic(value)))
  })
  yield title().fontSize(150, 1)
  yield title().position.x(-150, 1)
  yield* title().text("Social Groups", 1)
  
  yield* beginSlide('Social Media');

  const spotifyBox = createRef<Rect>();
  const spotifyBox2 = createRef<Rect>();

  view.add(
    <Rect ref={spotifyBox} opacity={0}>
      <Img src={spotifyDiscord} scale={0.5} position={[500,150]}/>
    </Rect>
  )
  view.add(
    <Rect ref={spotifyBox2} opacity={0}>
      <Img src={spotifyWrapped} scale={0.4} position={[600,100]}/>
    </Rect>
  )
  yield* contextMusic().text("○ Social Media integration",0.6)
  yield* spotifyBox().opacity(1,0.6);

  yield* beginSlide('Spotify Wrapped');
  yield spotifyBox().opacity(0,0.6);
  yield* spotifyBox2().opacity(1,0.6);

  yield* beginSlide('S');
  yield contextMusic().text("○ Social Media integration \n ○ Sub-cultures and networks of middle class artists",0.6)
  yield* spotifyBox2().opacity(0,0.6);

  /**
   * Conclusion
   */

  yield* beginSlide('Conclusion');
  yield* contextMusic().text("",0.6)

  yield title().text("Conclusions",1);
  yield title().position.x(150, 1)
  sideLines2().children().forEach(child => {
    (child as Txt).fill('#673ab7')
  })
  yield* tween(1  ,value => {
    sideLines().scale(map(1,1.4,easeInOutCubic(value))),
    sideLines2().scale(map(1.4,1,easeInOutCubic(value)))
  })

  yield* contextMusic().text("○ MSSs are corrolated to music industry growth",0.6)
  yield* beginSlide('Conclusion2');
  yield* contextMusic().text("○ MSSs are corrolated to music industry growth \n ○ Context based listening gives power to Algorthims \n",0.6)
  yield* beginSlide('Conclusion3');
  yield* contextMusic().text("○ MSSs are corrolated to music industry growth \n ○ Context based listening gives power to Algorthims \n ○ Algorthims may increase or decrease artist diversity",0.6)
  yield* beginSlide('Conclusion4');
  yield* contextMusic().text("○ MSSs are corrolated to music industry growth \n ○ Context based listening gives power to Algorthims \n ○ Algorthims may increase or decrease artist diversity \n ○ MSSs create and grow social groups",0.6)

  /**
   * References
   */

  yield* beginSlide('References');

  yield contextMusic().text("",1.6)

  yield* waitFor(0.6);

  sideLines().children().forEach(child => {
    (child as Txt).fill('#ff0000')
  })

  yield tween(0.6,value => {
    sideLines2().scale(map(1,1.4,easeInOutCubic(value)))
  })

  yield tween(0.6,value => {
    sideLines().scale(map(1.4,1,easeInOutCubic(value)))
  })
  yield title().fontSize(150, 1)
  yield title().position.x(-150, 1)
  yield* title().text("References", 1)

  // contextMusic().fontSize(40);
  // contextMusic().lineHeight(70);
  // contextMusic().position.x(-900);
  
  const refQR = createRef<Rect>();

  view.add(
    <Rect ref={refQR} cache opacity={0}>
      <Rect size={[500,500]}  fill={'#ffffff'} opacity={1} position={[500,100]}></Rect>
      <Img src={referenceQR} scale={2} position={[500,100]} compositeOperation={'destination-in'} />
    </Rect>
  )

  yield refQR().opacity(1,0.6);
  yield* contextMusic().text("https://tinyurl.com/3wbjcr22",1.6);
});
