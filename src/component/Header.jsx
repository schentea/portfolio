
export default function Header() {
  return (
    <div className="w-full flex bg-red-500">
      <div className="w-[30%] flex justify-center bg-blue-500">
        CHG's Portfolio
      </div>
      <div className="w-[70%] flex justify-center space-x-20 bg-blue-300">
        <div>ABOUT</div>
        <div>Skill</div>
        <div>Project</div>
      </div>
    </div>
  )
}