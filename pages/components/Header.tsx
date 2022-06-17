import { Container, Card, Button, Grid, Text } from "@nextui-org/react";
import { ReactFragment, ReactPortal } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import * as React from "react";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const router = useRouter();
    return (
       
        <Card className={styles.menu}>
          <Button.Group size="xl">
            <Link href="/">
              <Button>
                <Text>audit.law</Text>
              </Button>
            </Link>
            <Button>
              <Link href="/explore">
                <Image
                  width="40px"
                  height="40px"
                  alt="icon"
                  src="https://img.icons8.com/glyph-neue/344/europe.png"
                />
              </Link>
            </Button>
            <Link href="/profile">
              <Button>
                <Image
                  width="40px"
                  height="40px"
                  alt="icon"
                  src="https://img.icons8.com/glyph-neue/344/user-location.png"
                />
              </Button>
            </Link>
         
            <Button onClick={signOut}>Sign Out</Button>
               
      
          </Button.Group>
        </Card>
     
    )
}

export default Header;