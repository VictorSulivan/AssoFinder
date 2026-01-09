import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupInput,
// } from "@/components/ui/input-group"
// import { Kbd } from "@/components/ui/kbd"
// React Router
import { Outlet } from "react-router"
import { useLocation } from 'react-router-dom'
// Icons
// import { SearchIcon } from "lucide-react"
export default function Page() {

  const location = useLocation();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex justify-between items-center w-full px-4">
            <div className="flex items-center">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Accueil
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{location.pathname.split('/')}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {/* <div className="flex w-full max-w-xs flex-col gap-6">
              <InputGroup>
                <InputGroupInput placeholder="Rechercher..." />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </InputGroupAddon>
              </InputGroup>
            </div> */}
          </div>
        </header>
        <div className="bg-gradient-to-br from-green-200 via-white to-blue-50">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
