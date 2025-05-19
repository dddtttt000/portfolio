import { MdOutlineMail } from "react-icons/md"
import { MdOutlinePhoneAndroid } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import img from "./images/img_me.png"
export function Welcome() {
  return (
    <main className='flex items-center justify-center pt-16 pb-4'>
      <div className='flex-1 flex flex-col items-center min-h-0'>
        <header className='flex flex-col items-center'>
          <div className='w-[866px] max-w-[100vw]'>
            {/* <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            /> */}
            <div className='text-[20px]'>Front-end Developer</div>
            <div className='text-[64px] font-bold'>Portfolio</div>
            {/* <div className='px-3 py-2 border w-36 text-center rounded-full mt-10'>
              임송하
            </div> */}
            <div className='border border-b-0 mt-1'></div>
          </div>
        </header>
        <div className='max-w-[866px] w-full space-y-6'>
          <nav className='mt-10 space-y-4'>
            <div className='w-60'>
              <img src={img} alt='' className='rounded-2xl' />
            </div>
            <p className='leading-6 text-2xl text-indigo-600'>Contact</p>
            <ul>
              {resources.map(({ subText, text, icon }) => (
                <li key={subText}>
                  <div
                    className='group flex items-center gap-2 leading-normal'
                    // href={href}
                    // target='_blank'
                    // rel='noreferrer'
                  >
                    {icon}
                    <span>{subText}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className='text-2xl text-indigo-600'>Introduce</div>
            <div className='px-2 grid gap-3 leading-7'>
              <div>
                저는 단순히 기능을 구현하는 데 그치지 않고, 제가 만든 서비스를
                실제 사용자가 경험하고, 피드백을 주고, 그에 따라 빠르게 개선해
                나가는 반복의 사이클에서 큰 동기와 재미를 느낍니다.
              </div>
              <div>
                개발을 하며 무엇보다 중요한 건 '사용자 입장에서 불편함 없이
                사용할 수 있는가'라고 생각하기 때문에 이런 관점을 중심에 두고,
                더 명확하고 직관적인 화면을 고민하며, 때로는 개발보다 사용자
                경험 설계를 우선하기도 합니다.
              </div>
              <div>
                새로운 기술 스택이나 팀 환경, 낯선 도메인에 빠르게 적응하고,
                실질적인 결과물로 연결시키는 실행력이 제 강점이며, 익숙하지 않은
                기술이나 문제에 부딪혀도 구조를 빠르게 파악하고, 필요한 방향을
                주도적으로 설정해 나가는 데 자신 있습니다.
              </div>
              <div>
                앞으로 저는 변화에 빠르게 적응하고, 사용자 경험에 최적화된
                개발을 통해 사람들에게 실질적인 가치를 전달할 수 있는 프론트엔드
                개발자로 계속 성장해가고자 합니다.
              </div>
            </div>

            <div className='text-2xl text-indigo-600'>Skills</div>
            <div className='px-2'>
              <div>
                🛠 React, Next, React Native, TypeScript, JavaScript, Tailwind
                CSS, HTML, CSS, SCSS
              </div>
              <div>🖇 Git, Git-flow, Jira, Figma</div>
            </div>
          </nav>
        </div>
      </div>
    </main>
  )
}

const resources = [
  {
    text: "Mobile",
    subText: "010-3109-3499",
    icon: <MdOutlinePhoneAndroid />,
  },
  {
    text: "E-mail",
    subText: "dddtttt000@gmail.com",
    icon: <MdOutlineMail />,
  },
  {
    text: "Github",
    subText: "github.com/dddtttt000",
    icon: <FaGithub />,
  },
  // {
  //   text: "Blog",
  //   subText: ": notion.site/Songha",
  //   href: "https://www.notion.so/TIL-41737a9151154ba99e9d2c8e6940a058?pvs=21",
  //   icon: (
  //     <svg
  //       xmlns='http://www.w3.org/2000/svg'
  //       width='24'
  //       height='20'
  //       viewBox='0 0 20 20'
  //       fill='none'
  //       className='stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300'
  //     >
  //       <path
  //         d='M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z'
  //         strokeWidth='1.5'
  //         strokeLinecap='round'
  //       />
  //     </svg>
  //   ),
  // },
]
