export interface NavLinksProps {
  label: string;
  destination: string;
}

export const navLinks: NavLinksProps[] = [
  {
    label: "Books",
    destination: "/",
  },
  {
    label: "Illustrations",
    destination: "/illustrations",
  },
  {
    label: "Blog",
    destination: "/blog",
  },
  {
    label: "About",
    destination: "/about",
  },
  {
    label: "Contact",
    destination: "/contact",
  },
];
