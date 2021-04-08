import React from 'react';
import { PokemonProps } from './PokemonTypes';

interface HrefProps {
  to: string;
  text: string;
  event?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface IconSVGProps {
  icon: string;
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

interface ImageProps {
  src: RequestInfo;
  classes?: string;
  alt?: string;
}

interface LiProps {
  children: React.ReactElement | string | undefined;
}

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  customClass?: string;
  id?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface ButtonIconProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  iconPosition: 'right' | 'left';
  icon: string;
  fill: string;
  text: string;
  customClass?: string;
  id?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface LinksProps {
  children: React.ReactNode;
}

interface UlProps {
  lists: Record<string, string>[];
}

interface NavbarProps {
  logo: string;
  nodes: Record<string, string>[];
  login?: boolean | null;
}

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value: string | number | boolean;
  maxLength?: number;
  valid?: boolean;
  mask?: string | RegExp[];
  guide?: boolean;
  disabled?: boolean;
  handleInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface OptionsProps {
  value: string;
  text: string;
}

interface SelectProps {
  name: string;
  placeholder?: string;
  value?: string | number;
  options: OptionsProps[];
  className?: string;
  placeholderDeEspera?: string;
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface LabelProps {
  label: string;
  className?: string;
  size?: string;
  input: InputProps;
}

interface SelectGroupProps {
  label: string;
  select: SelectProps;
}

interface TitleProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  props?: Record<string, unknown>;
}

interface SubtitleProps {
  type: 'span' | 'p';
  text: string;
  props?: any;
}

interface ModalProps {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  customClass?: string;
  containerCustomClass?: string;
  children: React.ReactNode;
  show: boolean;
  showCloseButton?: boolean;
  start: boolean;
}

interface LoadingProps {
  loading: boolean;
}

interface HorizontalOfferProps {
  div: string;
  offerPokemon: PokemonProps[];
}

interface PokemonCardProps {
  type?: string;
  pokemon: PokemonProps;
}

interface BannerProps {
  src: string;
}

interface QuantitativeGroupButtonProps {
  handleQuantity: (operation: string, _quantity: number) => void;
  quantity: number;
  labelValue: string;
}

interface ModalCartProps {
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export type {
  ButtonProps,
  HrefProps,
  ImageProps,
  LiProps,
  LinksProps,
  UlProps,
  NavbarProps,
  InputProps,
  LabelProps,
  TitleProps,
  ModalProps,
  LoadingProps,
  SelectProps,
  OptionsProps,
  SelectGroupProps,
  IconSVGProps,
  SubtitleProps,
  ButtonIconProps,
  HorizontalOfferProps,
  PokemonCardProps,
  BannerProps,
  QuantitativeGroupButtonProps,
  ModalCartProps,
};
