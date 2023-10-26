import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { CaretRight } from 'phosphor-react';

export function BreadCrumbs() {
  const urlParamsProfile = location.href.split("/").pop();

  return (
    <Breadcrumb className="px-12" separator={<CaretRight size={14} className="text-base font-medium" color="#90bfff" />}>
      <BreadcrumbItem>
        <BreadcrumbLink className="text-BL100 text-base font-medium" href='/profile'>Perfil</BreadcrumbLink>
      </BreadcrumbItem>
      {urlParamsProfile === 'menudecompras'
        &&
        <BreadcrumbItem>
          <BreadcrumbLink className="text-BL100 text-base font-semibold" href='/menudecompras'>Compras</BreadcrumbLink>
        </BreadcrumbItem>
      }
    </Breadcrumb>
  );
}