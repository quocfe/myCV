import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import { useState } from 'react';

function Header() {
	const [showOptions, setShowOptions] = useState<boolean>(false);
	return (
		<nav className="flex items-center justify-around h-[130px] shadow-sm">
			<p className="text-[32px] ">My CV</p>
			<div
				className="relative p-2 lg:static"
				onClick={() => setShowOptions(!showOptions)}
			>
				<IonIcon
					icon={showOptions ? closeOutline : menuOutline}
					className="text-[30px] cursor-pointer lg:hidden"
				></IonIcon>
				<ul
					className={`bg-white flex-col absolute right-0 lg:flex lg:flex-row lg:static lg:gap-4 shadow-sm lg:shadow-none ${
						showOptions ? 'flex' : 'hidden'
					}`}
				>
					<li className="p-2">
						<a className="text-[30px]" href="#about">
							About
						</a>
					</li>
					<li className="p-2">
						<a className="text-[30px]" href="#skill">
							Skill
						</a>
					</li>
					<li className="p-2">
						<a className="text-[30px]" href="#project">
							Projects
						</a>
					</li>
					<li className="p-2">
						<a className="text-[30px]" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
