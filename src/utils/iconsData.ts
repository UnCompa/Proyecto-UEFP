// iconData.ts

import {
  FaBuilding,
  FaBook,
  FaChalkboardUser,
  FaClipboard,
  FaUserGraduate,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaLaptop,
  FaFile,
  FaBriefcase,
  FaCalendar,
  FaChartBar,
  FaComments,
  FaGlobe,
  FaSchool,
  FaMoneyBill,
  FaWrench,
  FaToolbox,
  FaGraduationCap,
  FaImage,
  FaNewspaper,
} from 'react-icons/fa6';

export const iconMap = {
  FaBuilding: FaBuilding,
  FaBook: FaBook,
  FaClipboard: FaClipboard,
  FaUserGraduate: FaUserGraduate,
  FaUsers: FaUsers,
  FaEnvelope: FaEnvelope,
  FaPhone: FaPhone,
  FaLaptop: FaLaptop,
  FaBriefcase: FaBriefcase,
  FaChartBar: FaChartBar,
  FaComments: FaComments,
  FaGlobe: FaGlobe,
  FaSchool: FaSchool,
  FaMoneyBill: FaMoneyBill,
  FaWrench: FaWrench,
  FaToolbox: FaToolbox,
  FaGraduationCap: FaGraduationCap,
  FaChalkboardUser: FaChalkboardUser,
  FaFile: FaFile,
  FaCalendar: FaCalendar,
  FaImage: FaImage,
  FaNewspaper: FaNewspaper,
};

export type IconName = keyof typeof iconMap;

export type IconComponent = (props: React.ComponentProps<'svg'>) => JSX.Element;
