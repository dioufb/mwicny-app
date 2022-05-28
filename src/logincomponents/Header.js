import { Image, useTheme } from "@aws-amplify/ui-react";
import logo from '../images/mwic.png';

export function Header() {
    const { tokens } = useTheme();
  
    return (
      <Image
        alt="logo"
        src={logo}
        padding={tokens.space.medium}
      />
    );
  }