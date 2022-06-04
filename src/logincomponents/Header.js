import { Image, useTheme } from "@aws-amplify/ui-react";
import logo from '../images/mwic.png';

export function Header() {
    const { tokens } = useTheme();
  
    return (
<div class="rowheader">
  <div class="columnheader">
  <Image
        alt="logo"
        src={logo}
        padding={tokens.space.medium}
      />    
  </div>
  <div class="columnheader">
  <span>Monroe-Woodbury Islamic Center</span>
  </div>
</div>      

    );
  }