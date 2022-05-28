export function Header() {
    const { tokens } = useTheme();
  
    return (
      <Image
        alt="logo"
        src="../images/mwic.png"
        padding={tokens.space.medium}
      />
    );
  }