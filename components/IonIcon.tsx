import React from 'react';

interface IonIconProps {
  name: string;
  [key: string]: any;
}

export default function IonIcon({ name, ...props }: IonIconProps) {
  return React.createElement('ion-icon', { name, ...props });
}