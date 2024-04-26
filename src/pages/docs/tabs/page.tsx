import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  MotionsTabs,
  MotionTabsContent,
  MotionTabsTrigger,
  TabsList,
} from '@/components/ui/tabs'

export function DocsTabsPage() {
  return (
    <div className="space-y-4 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tabs Animated</h1>
        <p className="text-muted-foreground">Motion Tabs</p>
      </div>
      <div className="relative flex justify-center overflow-hidden rounded-xl border border-border py-20 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <MotionsTabs defaultValue="account">
          <TabsList className="w-[400px] ">
            <MotionTabsTrigger value="account" className="flex-1">
              Account
            </MotionTabsTrigger>
            <MotionTabsTrigger value="password" className="flex-1">
              Password
            </MotionTabsTrigger>
          </TabsList>
          <MotionTabsContent value="account" className="w-[400px]">
            <Card className="relative overflow-hidden rounded-3xl border-b-0 border-t border-border border-x-border/50">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/50 via-50% to-transparent"
              />
              <div
                aria-hidden="true"
                className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
                style={{
                  background:
                    'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)',
                }}
              />
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when youre done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Lucas Nunes" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@lucasnunes" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </MotionTabsContent>
          <MotionTabsContent value="password" className="w-[400px]">
            <Card className="relative overflow-hidden rounded-3xl border-b-0 border-t border-border border-x-border/50">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/50 via-50% to-transparent"
              />
              <div
                aria-hidden="true"
                className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
                style={{
                  background:
                    'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)',
                }}
              />
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you &aposl l be
                  logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </MotionTabsContent>
        </MotionsTabs>
      </div>
    </div>
  )
}
