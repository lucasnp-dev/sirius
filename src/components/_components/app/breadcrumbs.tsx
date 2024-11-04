'use client'

import { Fragment } from 'react'

import { useAppContext } from '@/contexts/app-contexts'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function BreadCrumbs() {
  const { state: app } = useAppContext()

  return (
    <>
      {app.page && app.page.breadcrumbs && (
        <Breadcrumb>
          <BreadcrumbList>
            {app.page.breadcrumbs.map((breadcrumb) => (
              <Fragment key={breadcrumb.item}>
                <BreadcrumbItem key={breadcrumb.item}>
                  <BreadcrumbLink href={breadcrumb.link}>
                    {breadcrumb.item}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ))}

            <BreadcrumbItem>
              <BreadcrumbPage>{app.page.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  )
}
