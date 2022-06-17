import { Container, Card, Button, Grid } from "@nextui-org/react";
import { ReactFragment, ReactPortal } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";
import * as React from "react";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const NavBar = () => {
    const session = useSession();
    const router = useRouter();
    return (
       
        <Card className={styles.thumbnav}>
          <Button.Group size="xl">
            <Link href="/home">
              <Button>
                <Image
                  width="40px"
                  height="40px"
                  alt="icon"
                  src="https://img.icons8.com/glyph-neue/344/home.png"
                />
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
            <Link href="/notifications">
              <Button>
                <Image
                  width="40px"
                  height="40px"
                  alt="icon"
                  src="https://img.icons8.com/glyph-neue/344/settings.png"
                />
              </Button>
            </Link>
          </Button.Group>
        </Card>
     
    )
}

export default NavBar;