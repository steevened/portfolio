// import React, { useState } from 'react';
// import tw from 'twin.macro';
// import Icon from './components/Icons/Icon';
// import { useEffect } from 'react';

// const styles = {
//   input: [tw`appearance-none`],
//   label: [tw`flex cursor-pointer`],
// };

// export default function ThemeToggle() {
//   const [isChecked, setIsChecked] = useState(false);

//   const setTheme = (theme: string) => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//       localStorage.theme = 'dark';
//     } else if (theme === 'light') {
//       document.documentElement.classList.remove('dark');
//       localStorage.theme = 'light';
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.removeItem('theme');
//     }
//   };

//   return (

//   );
// }
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Icon from './components/Icons/Icon';

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
];

function MyMenu() {
  return (
    <div className="border">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>Options</Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items>
            <Menu.Item>
              <div className="w-8 h-8 text-xl rounded-full m-1">
                <Icon icon="sun" />
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default MyMenu;
