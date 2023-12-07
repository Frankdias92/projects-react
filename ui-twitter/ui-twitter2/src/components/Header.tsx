import { Sparkle } from "@phosphor-icons/react";
import './Header.css'

interface HeaderProps {
  titter: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className="timeline-header">
      {props.titter}
      <Sparkle />
    </div>
  )
}