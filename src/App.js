import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import voices from "./voices.json"

function App() {
  const [selectedVoiceName, setSelectedVoiceName] =useState("Julian")
  const [isHideCard, setIsHideCard] =useState({card1:true, card2:true, card3:true, card4:true})
  const [isSelectedCard, setIsSelectedCard] =useState({card1:true, card2:false, card3:false, card4:false, card5:false})
  return (
      <div className='flex flex-col'>
          <section className="w-full">
              <div className='flex w-full h-[88px] px-[10px] md:px-[20px] gap-[10px] py-[24px]'>
                  <div className='flex w-full justify-between h-[40px]'>
                      <div className='flex flex-row justify-between items-center h-[40px] gap-[8px]'>
                          <img src="./LandingPage/play-button.svg" alt="Play button"/>
                          <div className='w-[100px] h-[20px]'>
                              <span>PlayGO.AI</span>
                          </div>
                      </div>
                      <div className='flex h-[40px] gap-[40px]'>
                          <div className='flex flex-row justify-between w-[160px] md:w-[208px] h-[40px] gap-[8px]'>
                              <button className='flex justify-center items-center w-[80px] md:w-[100px] h-[40px] rounded-[34px] border border-[--Primary] py-[6px] px-[16px]'>
                                  <span className='w-[54px] h-[24px] text-[--Primary] font-["Poppins"] font-medium text-xs leading-6 text-center'>
                                    Sign in
                                  </span>
                              </button>
                              <button className='flex justify-center items-center bg-[--Primary] w-[80px] md:w-[100px] h-[40px] rounded-[36px] py-[6px] px-[16px] gap-[8px]'>
                                  <span className='w-[61px] h-[24px] text-black font-["Poppins"] font-medium text-xs leading-6 text-center'>
                                    Sign up
                                  </span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section>
              <div className='flex items-center w-full justify-center pb-[40px]'>

                  <div className='flex flex-col text-center md:text-left lg:flex-row justify-between items-center w-full px-[20px]'>
                      <div className='flex flex-col w-full lg:w-[60%] pt-[60px] gap-[16px]'>
                          <h4>
                              <span className='font-medium text-xs leading-6 font-["Poppins"]'>
                              CREATING REALISTIC TEXT TO SPEECH EXPERIENCES
                              </span>
                          </h4>
                          <span className='font-semibold font-["Poppins"] text-[36px] md:text-[44px] leading-[60px]'>
                              Elevate Your Voice Generation with the Power of AI
                          </span>
                          <h4>
                              <span className='font-["Poppins"] text-[14px] md:text-[18px] font-normal leading-[27px]'>
                                  An innovative platform that converts written text into emotionally-rich spoken words, all recorded in studio-quality. Perfectly adaptable for commercial purposes and seamless sharing across diverse platforms: YouTube, TikTok, E-learning, Content Marketing, and more.
                              </span>
                          </h4>
                          <div className="w-full flex justify-center items-center md:block">
                              <button className='w-[269px] h-[51px] rounded-[35px] py-[12px] px-[20px] bg-[--Primary]'>
                                  <div className='w-[229px] h-[27px] gap-[10px]'>
                                      <span className='font-["Poppins"] font-medium text-[18px] leading-[27px] text-center text-white'>
                                          Generate AI voice for free
                                      </span>
                                  </div>
                              </button>
                          </div>
                      </div>
                      <div className="h-[266px] md:h-[247px] w-full lg:w-[40%]">
                          <div className='flex relative w-full rounded-[40px]'>
                              <img className='w-[80%] mx-auto h-[108px] mt-[10px]' src='/LandingPage/sound-and-play.svg' alt=''/>
                              <img className='absolute w-[68px] right-[68px] top-[89px] h-[38px] md:h-[69px] md:top-[120px] md:left-[370px] rotate-[7deg]' src='/LandingPage/red-arrow.svg' alt=''/>
                              
                              <span className='absolute w-[231px] h-[37px] top-[194px] right-[80px] md:right-[170px] md:top-[283px] md:left-[70px] text-[17px] md:text-[24px] leading-[37px] font-carter-one text-[--Primary]'>
                                      AI generative voice
                              </span>
                              <img className='absolute w-[81px] h-[69px] md:top-[300px] md:left-[-13px] top-[219px] right-[266px] rotate-[-8deg]' src='/LandingPage/black-arrow.svg' alt=''/>
                          </div>

                          <div className="md:relative w-full flex justify-center md:block">
                              <div className='flex mt-[15px] md:absolute justify-center items-center absolute w-[219px] md:w-[341px] h-[52px] md:h-[84px] md:top-[70px] md:left-[50px] rounded-[40px] border-[--Primary] border-2'>
                                  <span className='w-[280px] h-[46px] font-["Poppins"] font-normal text-[11px] md:text-[16px] leading-[24px] text-[#212B36]'>
                                          It's quick, just type your stuff in and choose the right voice... |
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section>
          <div className='flex flex-col items-center w-full'>
              <div className='flex justify-center  w-full  lg:h-[640px] pb-[40px] px-[10px] md:px-[100px] gap-[10px]'>
                  <div className='flex justify-between flex-col lg:flex-row bg-[#F4F6F8] w-full lg:w-[1200px]  lg:h-[600px] rounded-[16px] border-1 border-[#F1F4F9] shadow-[0_12px_24px_-4px_#919EAB1F]'>
                      <div className='flex flex-col justify-between w-full lg:w-[660px] lg:h-[600px] p-[24px] gap-[24px]'>
                          <div className='flex flex-col justify-between bg-white w-full lg:w-[612px] h-[250px] lg:h-[464px] rounded-[8px] py-[16px] px-[24px] gap-[10px]'>
                              <div className='w-full lg:w-[564px] h-[40px]'>
                                  <div className='flex flex-row w-[216px] h-[40px] gap-[24px]'>
                                      <img src={`/avatar/${selectedVoiceName.toLowerCase()}.png`}
                                          className='w-[40px] h-[40px] rounded-[100px] border-2 border-white' alt=''/>
                                      <div className='flex items-center'>
                                          <span className='w-[152px] h-[24px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-[#919EAB]'>
                                          Type your text here
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-end '>
                                  <span className='w-[53px] h-[21px] font-["Poppins"] text-[14px] leading-[21px] font-medium'>
                                  0/5000
                                  </span>
                              </div>
                          </div>
                          <div className='bg-white w-full lg:w-[612px] h-[64px] rounded-[8px] py-[8px] px-[24px] gap-[10px]'>
                              <div className='flex flex-row items-center w-full lg:w-[521px] h-[48px] gap-[24px]'>
                                  <img className='w-1/4 lg:w-[30px] h-[30px] lg:w-[48px] lg:h-[48px] rounded-[24px]' src='/LandingPage/play-button.svg' alt=''/>
                                  <img className='w-2/4 lg:w-[449px] h-[24px] gap-[1px]' src='/LandingPage/audio-slider.svg' alt=''/>
                                  <span className='w-1/4 lg:w-[39px] h-[21px] font-["Poppins"] text-[14px] leading-[21px] font-normal text-[#212B36]'>
                                      0:00
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div className='flex flex-col justify-center mx-auto w-full mt-[10px] lg:rounded-r-[16px] border-2 border-[#F1F4F9] bg-white lg:w-[540px] h-[600px] py-[24px] gap-[24px]'>
                          <div className='w-full lg:w-[540px] h-[44px] py-[10px] px-[24px] gap-[10px]'>
                              <div className='flex justify-between w-full lg:w-[492px] h-[24px]'>
                                  <div className='flex flex-row w-[137px] h-[24px] gap-[16px]'>
                                      <img className='w-[24px] h-[24px]' src='/LandingPage/speaker.svg' alt=''/>
                                      <span className='w-[97px] h-[24px] font-["Poppins"] text-[16px] leading-[24px] font-medium'>
                                          Select voice
                                      </span>
                                  </div>
                                  <div className='flex flex-row cursor-pointer w-[109px] h-[21px] gap-[4px]'>
                                      <span className='w-[85px] h-[21px] font-["Poppins"] text-[14px] leading-[21px] font-medium'>
                                          More voices
                                      </span>
                                      <img className='w-[20px] h-[20px]' src='/LandingPage/chevron-right.svg' alt=''/>
                                  </div>
                              </div>
                          </div>
                          <div className='flex flex-row justify-between overflow-x-scroll overflow-y-hidden w-full lg:w-[540px] h-[120px] px-[24px] gap-[16px]'>
                              {voices.slice(0,4).map((val) => (
                                  <div className={`flex flex-col justify-center items-center cursor-pointer w-[110px] h-[120px] rounded-[8px] border py-[16px] px-[24px] gap-[10px]
                                  ${selectedVoiceName === val.name ? 'border-[--Primary]' : 'border-[#C4CDD5]'}`}
                                       onClick={()=>{setSelectedVoiceName(val.name)}}
                                  >
                                      <img className='bg-white w-[40px] h-[40px] rounded-[100px] border-2' src={val.avatarSrc} alt=''/>
                                      <span className='h-[24px] font-["Poppins"] text-[16px] leading-[24px] font-medium text-[#212B36]'>
                                      {val.name}
                                      </span>
                                  </div>
                              ))}
                          </div>
                          <div className='w-full lg:w-[540px] h-[56px] px-[24px] gap-[10px]'>
                              <div className='w-full lg:w-[492px] h-[56px] rounded-[8px] py-[16px] px-[24px] gap-[10px] border border-[#C4CDD5]'>
                                  <div className='flex justify-between cursor-pointer w-[444px] h-[24px]'>
                                      <div className='flex flex-row w-[172px] h-[24px] gap-[16px]'>
                                          <img className='w-[24px] h-[24px]' src='/LandingPage/internet.svg' alt=''/>
                                          <span className='w-[132px] h-[24px] font-["Poppins"] text-[16px] leading-[24px] font-medium text-[#212B36]'>
                                          Select language
                                          </span>
                                      </div>
                                      <img className='w-[20px] h-[20px]' src='/LandingPage/chevron-down.svg' alt=''/>
                                  </div>
                              </div>
                          </div>
                          <div className='w-full lg:w-[540px] h-[56px] px-[24px] gap-[10px]'>
                              <div className='w-full lg:w-[492px] h-[56px] cursor-pointer rounded-[8px] py-[16px] px-[24px] gap-[10px] border border-[#C4CDD5]'>
                                  <div className='flex justify-between w-[444px] h-[24px]'>
                                      <div className='flex flex-row w-[172px] h-[24px] gap-[16px]'>
                                          <img className='w-[24px] h-[24px]' src='/LandingPage/fast-forward.svg' alt=''/>
                                          <span className='w-[132px] h-[24px] font-["Poppins"] text-[16px] leading-[24px] font-medium text-[#212B36]'>
                                          Normal (1x)
                                          </span>
                                      </div>
                                      <img className='w-[20px] h-[20px]' src='/LandingPage/chevron-down.svg' alt=''/>
                                  </div>
                              </div>
                          </div>
                          <div className='w-full lg:w-[540px] h-[72px] px-[24px] gap-[10px]'>
                              <span className='w-full lg:w-[492px] h-[72px] font-["Poppins"] text-[16px] leading-[24px] font-normal text-[#454F5B]'>
                              Register an account to unlock over <span className='text-[--Primary]'>100+ high-quality voices</span> and enjoy precise control over pitch, tone, and speed adjustments.
                              </span>
                          </div>
                          <div className='w-full flex items-center justify-center mt-[10px] lg:w-[540px] h-[56px] px-[24px] gap-[10px]'>
                              <div className='flex justify-center cursor-pointer bg-[--Primary] w-[492px] h-[56px] rounded-[8px] py-[16px] px-[24px] gap-[10px]'>
                                  <span className= 'w-[91px] h-[24px] font-["Poppins"] text-[16px] leading-[24px] font-medium text-white'>
                                      Get started
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='flex flex-col items-center w-full h-auto py-[40px] px-[20px] lg:px-[100px] gap-[40px]'>
                  <div className='flex flex-col items-center w-full gap-[16px]'>
                      <div className='flex flex-row w-[160px] h-[24px] pl-[8px] border-l-[4px] border-[--Primary]'>
                          <span className='w-[200px] font-["Poppins"] text-[16px] leading-[24px] font-semibold text-[#637381]'>
                              ABOUT PLAYGO.AI
                          </span>
                      </div>
                      <span className='w-full font-["Poppins"] text-[#212B36] text-[30px] lg:text-[48px] leading-[72px] font-semibold text-center'>
                          Key Features of <span className='text-[--Primary]'>Text To Speech</span>
                      </span>
                      <span className='w-full font-["Poppins"] text-[#212B36] text-[14px] lg:text-[18px] leading-[27px] font-normal text-center'>
                          Select a voice, input or upload a text, and instantly transform it into high-quality narrated audio
                      </span>
                  </div>
                  <div className='flex flex-col w-full gap-[16px]'>
                      <div className='w-full rounded-[16px] border border-[#C4CDD5] p-[24px] gap-[24px] '>
                          <div className='flex flex-row items-center justify-between'>
                              <img className='w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]' src='/LandingPage/electric-board.svg' alt=''/>
                              <div className='lg:w-[620px]'>
                                  <span className='font-["Poppins"] font-semibold text-[12px] lg:text-[20px] leading-[30px] text-grey-800'>Text processing maximized by AI</span>
                              </div>
                              {isHideCard.card1 ?
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/plus.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card1:false}
                                       }))}}
                                  />
                                  :
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/subtract.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card1:true}
                                       }))}}
                                  />
                              }
                          </div>
                          {!isHideCard.card1 &&
                            <div className='w-full lg:w-[740px] h-auto px-[20px] pt-[10px] lg:px-[73px] gap-[10px]'>
                              <span className='font-["Poppins"] font-normal text-[13px] lg:text-[16px] leading-[24px] text-gray-400'>
                                  Experience the full potential of text processing through the power of AI. Our advanced technology optimizes and streamlines text-related tasks, ensuring efficiency and accuracy in every step of the process.
                              </span>
                            </div>
                          }
                      </div>
                      <div className='w-full rounded-[16px] border border-[#C4CDD5] p-[24px] gap-[24px] '>
                          <div className='flex flex-row items-center justify-between'>
                              <img className='w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]' src='/LandingPage/internet.svg' alt=''/>
                              <div className='lg:w-[620px]'>
                                  <span className='font-["Poppins"] font-semibold text-[12px] lg:text-[20px] leading-[30px] text-grey-800'>Support for multilingual speech</span>
                              </div>
                              {isHideCard.card2 ?
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/plus.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card2:false}
                                       }))}}
                                  />
                                  :
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/subtract.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card2:true}
                                       }))}}
                                  />
                              }
                          </div>
                          {!isHideCard.card2 &&
                            <div className='w-full lg:w-[740px] h-auto px-[20px] pt-[10px] lg:px-[73px] gap-[10px]'>
                              <span className='font-["Poppins"] font-normal text-[13px] lg:text-[16px] leading-[24px] text-gray-400'>
                                  Effortlessly communicate across languages with our comprehensive multilingual speech support. Our technology enables you to convert text into natural-sounding speech in various languages, breaking down language barriers and expanding your reach.
                              </span>
                            </div>
                          }
                      </div>
                      <div className='w-full rounded-[16px] border border-[#C4CDD5] p-[24px] gap-[24px] '>
                          <div className='flex flex-row items-center justify-between'>
                              <img className='w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]' src='/LandingPage/user.svg' alt=''/>
                              <div className='lg:w-[620px]'>
                                  <span className='font-["Poppins"] font-semibold text-[12px] lg:text-[20px] leading-[30px] text-grey-800'>Diverse range of reading voices by gender and region</span>
                              </div>
                              {isHideCard.card3 ?
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/plus.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card3:false}
                                       }))}}
                                  />
                                  :
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/subtract.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card3:true}
                                       }))}}
                                  />
                              }
                          </div>
                          {!isHideCard.card3 &&
                            <div className='w-full lg:w-[740px] h-auto px-[20px] pt-[10px] lg:px-[73px] gap-[10px]'>
                              <span className='font-["Poppins"] font-normal text-[13px] lg:text-[16px] leading-[24px] text-gray-400'>
                                  Experience a diverse collection of reading voices, tailored by both gender and regional nuances. Our service offers an array of voices that reflect different genders and regions, ensuring a personalized and engaging auditory experience for your content.
                              </span>
                            </div>
                          }
                      </div>
                      <div className='w-full rounded-[16px] border border-[#C4CDD5] p-[24px] gap-[24px] '>
                          <div className='flex flex-row items-center justify-between'>
                              <img className='w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]' src='/LandingPage/recorder.svg' alt=''/>
                              <div className='lg:w-[620px]'>
                                  <span className='font-["Poppins"] font-semibold text-[12px] lg:text-[20px] leading-[30px] text-grey-800'>Voice replication of an individual within just some hours</span>
                              </div>
                              {isHideCard.card4 ?
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/plus.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card4:false}
                                       }))}}
                                  />
                                  :
                                  <img className='cursor-pointer w-[24px] h-[24px]' src='/LandingPage/subtract.svg' alt=''
                                       onClick={()=>{setIsHideCard(isHideCard => ({
                                           ...isHideCard,
                                           ...{card4:true}
                                       }))}}
                                  />
                              }
                          </div>
                          {!isHideCard.card4 &&
                            <div className='w-full lg:w-[740px] h-auto px-[20px] pt-[10px] lg:px-[73px] gap-[10px]'>
                              <span className='font-["Poppins"] font-normal text-[13px] lg:text-[16px] leading-[24px] text-gray-400'>
                                  Recreate someone's voice within a matter of hours. Our technology can accurately replicate an individual's voice, capturing their unique vocal characteristics and nuances quickly and efficiently.
                              </span>
                            </div>
                          }
                      </div>
                  </div>
              </div>
              <div className='flex flex-col w-full py-[40px] px-[20px] lg:px-[100px]'>
                  <div className='flex flex-col items-center w-full gap-[16px]'>
                      <div className='w-[93px] h-[24px] border-l-[4px] border-[--Primary] pl-[8px]' >
                          <span className='font-["Poppins"] text-gray-600 text-[16px] leading-[24px] font-semibold'>USE CASE</span>
                      </div>
                      <span className='w-full font-["Poppins"] text-gray-800 text-[36px] lg:text-[48px] leading-[72px] font-semibold text-center'>
                          Elevate Your Projects with Exceptionally Realistic <span className='text-[--Primary]'>AI-Generated Voices</span>
                      </span>
                      <span className='w-full font-["Poppins"] text-gray-800 text-[16px] lg:text-[18px] leading-[27px] font-normal text-center'>
                          Craft captivating voice content using distinct AI Voices tailored to your audience's preferences
                      </span>
                  </div>
                  <div className='flex flex-col items-center w-full h-auto gap-[30px] pt-[40px]'>
                      <div className='flex justify-center w-full overflow-x-scroll h-[100px] lg:h-[77px] py-[16px] gap-[8px]'>
                          <button className={`min-w-fit lg:w-[225px] h-[45px] rounded-[35px] border py-[12px] px-[16px] 
                          ${isSelectedCard.card1 ? 'border-[--Primary]' : 'border-[#C4CDD5]'}`}
                                  onClick={()=>{setIsSelectedCard(isSelectedCard => ({
                                      ...isSelectedCard,
                                      ...{card1:true,card2:false,card3:false,card4:false,card5:false}
                                  }))}}
                          >
                              <div className='flex items-center'>
                                  <span className='font-["Poppins"] text-gray-800 font-medium text-[14px] leading-[21px] text-center'>AI-Driven Video Voiceovers</span>
                              </div>
                          </button>
                          <button className={`min-w-fit lg:w-[217px] h-[45px] rounded-[35px] border py-[12px] px-[16px]
                          ${isSelectedCard.card2 ? 'border-[--Primary]' : 'border-[#C4CDD5]'}`}
                                  onClick={()=>{setIsSelectedCard(isSelectedCard => ({
                                      ...isSelectedCard,
                                      ...{card1:false,card2:true,card3:false,card4:false,card5:false}
                                  }))}}
                          >
                              <div className='flex items-center'>
                                  <span className='font-["Poppins"] text-gray-800 font-medium text-[14px] leading-[21px] text-center'>Effortless Audio Publishing</span>
                              </div>
                          </button>
                          <button className={`min-w-fit lg:w-[90px] h-[45px] rounded-[35px] border py-[12px] px-[16px]
                          ${isSelectedCard.card3 ? 'border-[--Primary]' : 'border-[#C4CDD5]'}`}
                                  onClick={()=>{setIsSelectedCard(isSelectedCard => ({
                                      ...isSelectedCard,
                                      ...{card1:false,card2:false,card3:true,card4:false,card5:false}
                                  }))}}
                          >
                              <div className='flex items-center'>
                                  <span className='font-["Poppins"] text-gray-800 font-medium text-[14px] leading-[21px] text-center'>Podcast</span>
                              </div>
                          </button>
                          <button className={`min-w-fit lg:w-[190px] h-[45px] rounded-[35px] border py-[12px] px-[16px]
                          ${isSelectedCard.card4 ? 'border-[--Primary]' : 'border-[#C4CDD5]'}`}
                                  onClick={()=>{setIsSelectedCard(isSelectedCard => ({
                                      ...isSelectedCard,
                                      ...{card1:false,card2:false,card3:false,card4:true,card5:false}
                                  }))}}
                          >
                              <div className='flex items-center'>
                                  <span className='font-["Poppins"] text-gray-800 font-medium text-[14px] leading-[21px] text-center'>Immersive Storytelling</span>
                              </div>
                          </button>
                          <button className={`min-w-fit lg:w-[214px] h-[45px] rounded-[35px] border py-[12px] px-[16px]
                          ${isSelectedCard.card5 ? 'border-[--Primary]' : 'border-[#C4CDD5]'}`}
                                  onClick={()=>{setIsSelectedCard(isSelectedCard => ({
                                      ...isSelectedCard,
                                      ...{card1:false,card2:false,card3:false,card4:false,card5:true}
                                  }))}}
                          >
                              <div className='flex items-center'>
                                  <span className='font-["Poppins"] text-gray-800 font-medium text-[14px] leading-[21px] text-center'>Natural Conversational AI</span>
                              </div>
                          </button>
                      </div>
                      {isSelectedCard.card1 && <div className='w-full lg:w-[602px] rounded-[16px] shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                        <div className='w-full lg:w-[602px] lg:h-[361px] p-[30px]'>
                          <img src='/LandingPage/card1.svg' alt=''/>
                        </div>
                        <div className='p-[24px] gap-[16px]'>
                              <span className='font-["Poppins"] text-center lg:text-left text-gray-800 text-[16px] leading-[24px] font-normal'>
                                  Fuel your videos with impeccable, uniform, and expert voiceovers. Ideal for marketing, explanatory, product demonstrations, and YouTube content.
                              </span>
                        </div>
                      </div>}
                      {isSelectedCard.card2 && <div className='w-full lg:w-[602px] lg:h-[481px] rounded-[16px] shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                          <div className='w-full lg:w-[602px] lg:h-[361px] p-[30px]'>
                              <img src='/LandingPage/card2.svg' alt=''/>
                          </div>
                          <div className='p-[24px] gap-[16px]'>
                              <span className='font-["Poppins"] text-center lg:text-left text-gray-800 text-[16px] leading-[24px] font-normal'>
                                  Enhance accessibility and engagement on your websites with SEO-Optimized audio widgets. Convert your newspaper, articles, and blogs into engaging audio content.
                              </span>
                          </div>
                      </div>}
                      {isSelectedCard.card3 && <div className='w-full lg:w-[602px] lg:h-[481px] rounded-[16px] shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                          <div className='w-full lg:w-[602px] lg:h-[361px] p-[30px]'>
                              <img src='/LandingPage/card3.svg' alt=''/>
                          </div>
                          <div className='p-[24px] gap-[16px]'>
                              <span className='font-["Poppins"] text-center lg:text-left text-gray-800 text-[16px] leading-[24px] font-normal'>
                                  Craft compelling audiobook narrations using incredibly realistic voices, with seamless effectiveness. Trim production duration by generating instant audio.
                              </span>
                          </div>
                      </div>}
                      {isSelectedCard.card4 && <div className='w-full lg:w-[602px] lg:h-[481px] rounded-[16px] shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                          <div className='w-full lg:w-[602px] lg:h-[361px] p-[30px]'>
                              <img src='/LandingPage/card4.svg' alt=''/>
                          </div>
                          <div className='p-[24px] gap-[16px]'>
                              <span className='font-["Poppins"] text-center lg:text-left text-gray-800 text-[16px] leading-[24px] font-normal'>
                                  Craft and personalize your podcast using distinct voices, or replicate your own voice to streamline and expand your podcast creation.
                              </span>
                          </div>
                      </div>}
                      {isSelectedCard.card5 && <div className='w-full lg:w-[602px] lg:h-[481px] rounded-[16px] shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                          <div className='w-full lg:w-[602px] lg:h-[361px] p-[30px]'>
                              <img src='/LandingPage/card5.svg' alt=''/>
                          </div>
                          <div className='p-[24px] gap-[16px]'>
                              <span className='font-["Poppins"] text-center lg:text-left text-gray-800 text-[16px] leading-[24px] font-normal'>
                                  Infuse your conversational assistants with remarkably lifelike human voices. Engineer scalable, delightful customer interactions.
                              </span>
                          </div>
                      </div>}
                  </div>

              </div>
              <div className='w-full py-[40px] px-[20px] lg:px-[100px]'>
                  <div className='flex flex-col items-center w-full gap-[16px]'>
                      <div className='w-[120px] h-[24px] border-l-[4px] border-[--Primary] pl-[8px]' >
                          <span className='font-["Poppins"] text-gray-600 text-[16px] leading-[24px] font-semibold'>CASE STUDY</span>
                      </div>
                      <span className='w-full font-["Poppins"] text-gray-800 text-[36px] lg:text-[48px] leading-[72px] font-semibold text-center'>
                          Text To Speech <span className='text-[--Primary]'>AI Voices</span>
                      </span>
                      <span className='w-full font-["Poppins"] text-gray-800 text-[16px] lg:text-[18px] leading-[27px] font-normal text-center'>
                          Unleashing Voice AI Generation: Capturing Every Voice, Language, and Accent Imaginable
                      </span>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center overflow-x-auto p-[40px] gap-[30px]'>
                      <div className='flex flex-row w-[1160px] h-[84px] gap-[30px]'>
                          {voices.slice(0,3).map((val) => (
                              <div className='flex flex-row justify-between w-[366px] h-[84px] rounded-[69px] py-[8px] px-[14px]
                          shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                                  <div className='flex flex-row w-[131px] h-[68px] gap-[16px]'>
                                      <div className='flex justify-center items-center w-[64px] h-[64px] bg-[#F4F6F8] rounded-full'>
                                          <img className='ml-[5px] w-[19px] h-[21px]' src='/LandingPage/small-pause.svg' alt=''/>
                                      </div>
                                      <div className='w-[51px] h-[68px] gap-[4px]'>
                                          <span className='font-["Poppins"] text-gray-800 text-[16px] leading-[24px] font-semibold'>{val.name}</span>
                                          <img src='/LandingPage/spectrum.svg' alt=''/>
                                      </div>
                                  </div>
                                  <img className='rounded-full opacity-80' src={val.avatarSrc} alt=''/>
                              </div>
                          ))}
                      </div>
                      <div className='flex flex-row w-[1160px] h-[84px] gap-[30px]'>
                          {voices.slice(3,6).map((val) => (
                              <div className='flex flex-row justify-between w-[366px] h-[84px] rounded-[69px] py-[8px] px-[14px]
                          shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                                  <div className='flex flex-row w-[131px] h-[68px] gap-[16px]'>
                                      <div className='flex justify-center items-center w-[64px] h-[64px] bg-[#F4F6F8] rounded-full'>
                                          <img className='ml-[5px] w-[19px] h-[21px]' src='/LandingPage/small-pause.svg' alt=''/>
                                      </div>
                                      <div className='w-[51px] h-[68px] gap-[4px]'>
                                          <span className='font-["Poppins"] text-gray-800 text-[16px] leading-[24px] font-semibold'>{val.name}</span>
                                          <img src='/LandingPage/spectrum.svg' alt=''/>
                                      </div>
                                  </div>
                                  <img className='rounded-full opacity-80' src={val.avatarSrc} alt=''/>
                              </div>
                          ))}
                      </div>
                      <div className='flex flex-row w-[1160px] h-[84px] gap-[30px]'>
                          {voices.slice(6,9).map((val) => (
                              <div className='flex flex-row justify-between w-[366px] h-[84px] rounded-[69px] py-[8px] px-[14px]
                          shadow-[0px_12px_24px_-4px_#919EAB1F,0px_0px_2px_0px_#919EAB33]'>
                                  <div className='flex flex-row w-[131px] h-[68px] gap-[16px]'>
                                      <div className='flex justify-center items-center w-[64px] h-[64px] bg-[#F4F6F8] rounded-full'>
                                          <img className='ml-[5px] w-[19px] h-[21px]' src='/LandingPage/small-pause.svg' alt=''/>
                                      </div>
                                      <div className='w-[51px] h-[68px] gap-[4px]'>
                                          <span className='font-["Poppins"] text-gray-800 text-[16px] leading-[24px] font-semibold'>{val.name}</span>
                                          <img src='/LandingPage/spectrum.svg' alt=''/>
                                      </div>
                                  </div>
                                  <img className='rounded-full opacity-80' src={val.avatarSrc} alt=''/>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              <div className='flex flex-col items-center w-[1440px] h-[454px] py-[40px] px-[100px] gap-[40px]'>
                  <div className='flex flex-col justify-center items-center w-[1240px] h-[144px] gap-[10px]'>
                      <span className='w-[857px] font-["Poppins"] text-center text-gray-800 text-[48px] leading-[72px] font-bold'>
                          Why Should You Consider
                      </span>
                      <span className='w-[857px] font-["Poppins"] text-center text-gray-800 text-[48px] leading-[72px] font-bold'>
                          Choosing Us?
                      </span>
                  </div>
                  <div className='flex flex-row w-[1240px] h-[190px] gap-[30px]'>
                      <div className='flex flex-col w-[393px] gap-[16px]'>
                          <span className='font-["Poppins"] text-[#000000] text-[18px] leading-[27px] font-bold'>
                          Easy To Connect
                          </span>
                          <span className='font-["Poppins"] text-gray-700 text-[16px] leading-[24px] font-normal'>
                          You can effortlessly link with the TTS or directly convert text on the website's user interface into audio files with popular formats like MP3...
                          </span>
                      </div>
                      <div className='flex flex-col w-[393px] gap-[16px]'>
                          <span className='font-["Poppins"] text-[#000000] text-[18px] leading-[27px] font-bold'>
                          Authentic, Regionally Varied Reading Voices
                          </span>
                          <span className='font-["Poppins"] text-gray-700 text-[16px] leading-[24px] font-normal'>
                          Experience genuine spoken responses with natural pauses and expressive intonation through our TTS service. Tailored for the Vietnamese market, it's based on thorough research of unique regional speech traits.
                          </span>
                      </div>
                      <div className='flex flex-col w-[393px] gap-[16px]'>
                          <span className='font-["Poppins"] text-[#000000] text-[18px] leading-[27px] font-bold'>
                          Prompt Responsiveness
                          </span>
                          <span className='font-["Poppins"] text-gray-700 text-[16px] leading-[24px] font-normal'>
                          The TTS excels in swiftly accommodating user-scale requirements, effectively meeting the surges in system load that may arise.
                          </span>
                      </div>
                  </div>
              </div>
              <div className='relative flex w-[1440px] h-[560px] bg-[#FFF5ED]'>
                  <div className='z-10 w-[794px] h-[560px] bg-[--Primary]'>
                  </div>
                  <div className='z-20 absolute top-[105px] left-[100px] flex flex-col justify-between w-[762px] h-[350px] gap-[80px] '>
                      <div className='flex flex-col  w-[539px] h-[215px] gap-[16px]'>
                          <span className='h-[144px] font-["Poppins"] text-white text-[48px] leading-[72px] font-bold'>
                          Subscibe to Our Newsletter
                          </span>
                          <span className='h-[55px] font-["Poppins"] text-white text-[18px] leading-[29px] font-normal'>
                          Are you ready to experience the service of transforming text into the finest voice in Vietnam? ✌️
                          </span>
                      </div>
                      <div className='h-[55px] bg-white rounded-[52px] p-[8px] shadow-[0px_4px_120px_0px_#8E837126]'>
                          <div className='flex flex-row h-[39px] rounded-[43px] justify-between pl-[8px]'>
                              <div className='flex flex-row items-center h-[39px] gap-[16px]'>
                                  <img className='w-[24px] h-[24px]' src='/LandingPage/email.svg' alt=''/>
                                  <input className='font-["Poppins"] text-gray-600 text-[18px] leading-[27px] font-normal' placeholder="Email">
                                  </input>
                              </div>
                              <button className='bg-[--Primary] w-[118px] h-[40px] gap-[10px] rounded-[36px] py-[8px] px-[16px]'>
                                  <span className='font-["Poppins"] text-white text-[16px] leading-[24px] font-medium'>
                                      SUBSCRIBE
                                  </span>
                              </button>
                          </div>
                      </div>
                  </div>
                  <img className='absolute bottom-0 right-[30px]' src='/LandingPage/ornament.svg' alt=''/>
              </div>
          </div>

          </section>

          <div className='flex flex-col items-center w-full h-[450px]'>
              <div className='flex flex-col justify-between w-[1440px] h-[450px] py-[80px] px-[144px] gap-[40px]'>
                  <div className='flex justify-between items-center w-[1152px] h-[184px]'>
                      <div className='flex flex-col justify-between w-[526px] h-[184px] gap-[24px]'>
                          <div className='flex flex-row items-center w-[148px] h-[40px] gap-[8px]'>
                              <img src='/LandingPage/play-button.svg' alt=''/>
                              <span className='font-["Poppins"] text-[#434343] text-[20px] leading-[30px] font-semibold'>
                                  PlayGO.AI
                              </span>
                          </div>
                          <span className='w-[526px] h-[184px] font-["Poppins"] text-gray-600 text-[16px] leading-[24px] font-normal'>
                          Our Natural Vietnamese Text to Speech Solution provides you with the means to tackle a wide range of business development challenges effectively. With our ongoing commitment to research and improve both the solution and services, we look forward to being your steadfast partner in the long term.
                          </span>
                      </div>
                      <div className='flex flex-row justify-between w-[377px] h-[128px] gap-[80px]'>
                          <div className='flex flex-col w-[79px] h-[128px] gap-[24px]'>
                              <span className='w-[79px] font-["Poppins"] text-[#1A1617] text-[12px] leading-[18px] font-bold'>
                              GET STARTED
                              </span>
                              <div className='flex flex-col w-[73px] h-[86px] gap-[16px]'>
                                  <span className='font-["Poppins"] text-gray-600 text-[12px] leading-[18px] font-medium'>
                                  TTS Website
                                  </span>
                                  <span className='font-["Poppins"] text-gray-600 text-[12px] leading-[18px] font-medium'>
                                  TTS IOS
                                  </span>
                                  <span className='font-["Poppins"] text-gray-600 text-[12px] leading-[18px] font-medium'>
                                  TTS Android
                                  </span>
                              </div>
                          </div>
                          <div className='flex flex-col w-[218px] h-[128px] gap-[24px]'>
                              <span className='font-["Poppins"] text-[#1A1617] text-[12px] leading-[18px] font-bold'>
                              CONTACT
                              </span>
                              <div className='flex flex-col w-[218px] h-[86px] gap-[16px]'>
                                  <div className='flex flex-row'>
                                      <img src='/LandingPage/phone.svg' alt=''/>
                                      <span className='ml-[12px] font-["Poppins"] text-gray-600 text-[12px] leading-[18px] font-medium'>
                                      Hotline: (+84) 2838 4600 98
                                      </span>
                                  </div>
                                  <div className='flex flex-row'>
                                      <img src='/LandingPage/mail-box.svg' alt=''/>
                                      <span className='ml-[12px] font-["Poppins"] text-gray-600 text-[12px] leading-[18px] font-medium'>
                                      Email: hello@goldenowl.asia
                                      </span>
                                  </div>
                                  <div className='flex flex-row'>
                                      <img className='flex w-[16px] h-[16px] fill-[#637381]' src='/LandingPage/gray-internet.svg' alt=''/>
                                      <span className='ml-[12px] font-["Poppins"] text-gray-600 text-[12px] leading-[18px] font-medium'>
                                      Website: https://goldenowl.asia
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div className='flex w-[218px] h-[128px] gap-[24px]'>

                          </div>
                      </div>
                  </div>
                  <span className='font-["Poppins"] text-gray-600 text-[14px] leading-[21px] font-normal'>
                  © 2023 PlayGO.AI Text To Speech
                  </span>
              </div>
          </div>
      </div>
  )
}

export default App;
