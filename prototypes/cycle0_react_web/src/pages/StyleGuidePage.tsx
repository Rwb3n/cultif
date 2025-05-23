/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_styleguide_page_g131",
  "version_tag": "0.2.3-tailwind-shadcn-chunk4",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "REFACTORED (TSX) - Chunk 4: Adds shadcn/ui Dialog, Drawer, and Sheet to the StyleGuidePage. Completes the showcase of all currently used shadcn/ui components.",
  "artifact_type": "CODE_MODULE", 
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a centralized, interactive reference for the current UI toolkit, demonstrating modal-like components and side panels.",
  "key_logic_points": [
    "Demonstrates Tailwind CSS utility classes for typography and layout.",
    "Showcases shadcn/ui Button, Input, Label, Card, Checkbox components.",
    "Showcases the refactored Link primitive.",
    "Showcases shadcn/ui Dialog component.",
    "Showcases shadcn/ui Drawer component, emphasizing mobile-first usage.",
    "Showcases shadcn/ui Sheet component for side panels.",
    "Page layout and structure uses Tailwind CSS.",
    "Imports updated for newly added components and icons."
  ],
  "interfaces_provided": [
    { 
      "name": "StyleGuidePage", 
      "interface_type": "REACT_PAGE_COMPONENT", 
      "details": "Renders a collection of UI components for demonstration purposes.", 
      "notes": "Accessible via a route defined in AppRouter.tsx."
    }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "lucide-react", "version": "latest", "reason": "For icons used in shadcn/ui components and examples."}
  ],
  "internal_dependencies": [
    "cycle1_primitive_link_g132",
    "shadcn_ui_button_g160",
    "shadcn_ui_input_g160",
    "shadcn_ui_label_g160",
    "shadcn_ui_card_g160",
    "shadcn_ui_checkbox_g160",
    "shadcn_ui_dialog_g160",
    "shadcn_ui_drawer_g160",
    "shadcn_ui_sheet_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Chunk 4 of refactor at g=160. Adds Dialog, Drawer, Sheet. Completes shadcn/ui component showcase for now. Original scaffold g134."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import PrimitiveLink from '../components/primitives/Link'; // Refactored, Tailwind-styled Link

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// Icons from lucide-react for examples
import { Mail, PlusCircle, User, Bell, Search, CheckCircle2, Edit3, CalendarDays, Settings } from 'lucide-react';

// Other shadcn/ui components will be imported in later chunks as sections are added

const StyleGuidePage: React.FC = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean | 'indeterminate'>(false);

  const SectionWrapper: React.FC<{ title: string; id: string; children: React.ReactNode }> = ({ title, id, children }) => (
    <section id={id} className="mb-12 p-4 md:p-6 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">{title}</h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );

  const ComponentShowcase: React.FC<{ title: string; children: React.ReactNode, description?: string }> = ({ title, children, description }) => (
    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800/50">
      <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">{title}</h3>
      {description && <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{description}</p>}
      <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row md:flex-wrap items-start md:items-baseline">
        {children}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-blue-600 dark:text-blue-400">
        Cultif UI Component Visual Library
        </h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Showcasing shadcn/ui components, Tailwind CSS utilities, and custom elements, styled for a mobile-first experience.
        </p>
      </header>

      {/* Tailwind Typography Utilities */}
      <SectionWrapper title="Tailwind CSS Typography" id="tailwind-typography">
        <ComponentShowcase title="Headings">
          <h1 className="text-4xl font-bold">H1: text-4xl font-bold</h1>
          <h2 className="text-3xl font-semibold">H2: text-3xl font-semibold</h2>
          <h3 className="text-2xl font-medium">H3: text-2xl font-medium</h3>
          <h4 className="text-xl">H4: text-xl</h4>
          <h5 className="text-lg">H5: text-lg</h5>
          <h6 className="text-base">H6: text-base (default)</h6>
        </ComponentShowcase>
        <ComponentShowcase title="Paragraph & Text Styles">
          <p className="text-base leading-relaxed">This is a standard paragraph (text-base) using Tailwind CSS. <strong className="font-semibold">Bold text.</strong> <em className="italic">Italic text.</em></p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Small, muted text (text-sm text-slate-500).</p>
          <p className="text-lg text-blue-600 dark:text-blue-400">Primary color text (text-lg text-blue-600).</p>
          <p className="text-red-600 dark:text-red-400">Destructive color text (text-red-600).</p>
          <p className="truncate w-64">This long text will be truncated if it exceeds 256px width (truncate w-64).</p>
        </ComponentShowcase>
      </SectionWrapper>

      {/* Tailwind Layout Utilities */}
      <SectionWrapper title="Tailwind CSS Layout Utilities" id="tailwind-layout">
        <ComponentShowcase title="Flexbox" description="Demonstrates flex behavior with spacing.">
          <div className="flex space-x-2 p-2 bg-slate-100 dark:bg-slate-700/50 rounded-md w-full">
            <div className="p-2 bg-blue-500 text-white rounded">Item 1</div>
            <div className="p-2 bg-green-500 text-white rounded">Item 2</div>
            <div className="p-2 bg-purple-500 text-white rounded">Item 3</div>
          </div>
          <div className="mt-2 flex justify-between p-2 bg-slate-100 dark:bg-slate-700/50 rounded-md w-full">
            <div className="p-2 bg-blue-500 text-white rounded">Justify Between 1</div>
            <div className="p-2 bg-blue-500 text-white rounded">Justify Between 2</div>
          </div>
        </ComponentShowcase>
        <ComponentShowcase title="Grid" description="Responsive grid layout.">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 bg-slate-100 dark:bg-slate-700/50 rounded-md w-full">
            <div className="p-4 bg-blue-500 text-white rounded-md text-center">Grid Item 1</div>
            <div className="p-4 bg-green-500 text-white rounded-md text-center">Grid Item 2</div>
            <div className="p-4 bg-purple-500 text-white rounded-md text-center">Grid Item 3</div>
            <div className="p-4 bg-blue-600 text-white rounded-md text-center sm:col-span-2">Grid Item 4 (sm:col-span-2)</div>
            <div className="p-4 bg-green-600 text-white rounded-md text-center">Grid Item 5</div>
          </div>
        </ComponentShowcase>
        <ComponentShowcase title="Spacing & Sizing" description="Padding, Margin, Width, Height examples.">
          <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-md">Padding (p-4)</div>
          <div className="m-4 bg-slate-100 dark:bg-slate-700/50 rounded-md p-2">Margin (m-4)</div>
          <div className="w-1/2 p-2 bg-slate-100 dark:bg-slate-700/50 rounded-md">Width 50% (w-1/2)</div>
          <div className="h-20 p-2 bg-slate-100 dark:bg-slate-700/50 rounded-md flex items-center justify-center">Height 5rem (h-20)</div>
        </ComponentShowcase>
         <ComponentShowcase title="Borders & Shadows" description="Border styles, rounded corners, and shadow effects.">
          <div className="p-4 border border-blue-500 rounded-lg">Border Primary (border-blue-500)</div>
          <div className="p-4 border-2 border-dashed border-red-500 rounded-md">Dashed Destructive Border (border-red-500)</div>
          <div className="p-4 rounded-xl shadow-lg bg-white dark:bg-slate-800">Shadow Large (shadow-lg)</div>
        </ComponentShowcase>
      </SectionWrapper>

      {/* shadcn/ui Button */}
      <SectionWrapper title="Button (shadcn/ui)" id="button">
        <ComponentShowcase title="Variants">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </ComponentShowcase>
        <ComponentShowcase title="Sizes">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><User className="h-4 w-4" /></Button>
        </ComponentShowcase>
        <ComponentShowcase title="With Icon">
          <Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>
          <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Create New</Button>
        </ComponentShowcase>
        <ComponentShowcase title="Disabled State">
            <Button disabled>Disabled Default</Button>
            <Button variant="outline" disabled><Bell className="mr-2 h-4 w-4" /> Disabled Outline</Button>
        </ComponentShowcase>
      </SectionWrapper>

      {/* shadcn/ui Input & Label */}
      <SectionWrapper title="Input & Label (shadcn/ui)" id="input-label">
        <ComponentShowcase title="Basic Input with Label">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" value={textInputValue} onChange={(e) => setTextInputValue(e.target.value)} />
          </div>
        </ComponentShowcase>
        <ComponentShowcase title="Input with Placeholder & Icon">
            <div className="relative w-full max-w-sm">
                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                 <Input type="search" placeholder="Search..." className="pl-8" />
            </div>
        </ComponentShowcase>
        <ComponentShowcase title="Disabled Input">
          <Input type="text" placeholder="Disabled input" disabled className="max-w-sm"/>
        </ComponentShowcase>
         <ComponentShowcase title="Input for File" description="Note: Styling may vary by browser.">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </ComponentShowcase>
      </SectionWrapper>
      
      {/* Refactored Link Primitive */}
      <SectionWrapper title="Link (Refactored Primitive)" id="link">
        <ComponentShowcase title="Link Usages">
          <PrimitiveLink to="/style-guide#button" className="text-blue-600 hover:underline dark:text-blue-400">
            Link to Button Section
          </PrimitiveLink>
          <PrimitiveLink to="/some-other-page" variant="default" className="text-lg font-semibold text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300">
            Styled Destructive Link
          </PrimitiveLink>
          <Button asChild variant="link">
            <PrimitiveLink to="/style-guide#tailwind-layout">Go to Layout section (Button as Link)</PrimitiveLink>
          </Button>
        </ComponentShowcase>
      </SectionWrapper>

      {/* shadcn/ui Card */}
      <SectionWrapper title="Card (shadcn/ui)" id="card">
        <ComponentShowcase title="Basic Card">
          <Card className="w-full sm:w-[350px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description: A brief summary.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content area of the card. You can put any elements here.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </ComponentShowcase>
        <ComponentShowcase title="Card with Image Placeholder" description="Image placement is custom using Tailwind.">
            <Card className="w-full sm:w-[300px] overflow-hidden">
                <div className="w-full h-32 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <span className="text-slate-500 dark:text-slate-400">Image Placeholder (300x180)</span>
                </div>
                <CardHeader>
                    <CardTitle>Image Card</CardTitle>
                    <CardDescription>Description below image.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">More content here.</p>
                </CardContent>
                 <CardFooter>
                    <Button className="w-full"><CheckCircle2 className="mr-2 h-4 w-4" /> Approve</Button>
                </CardFooter>
            </Card>
        </ComponentShowcase>
      </SectionWrapper>

      {/* shadcn/ui Checkbox */}
      <SectionWrapper title="Checkbox (shadcn/ui)" id="checkbox">
        <ComponentShowcase title="Basic Checkbox">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms1" checked={checkboxChecked} onCheckedChange={setCheckboxChecked} />
            <Label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Accept terms and conditions
            </Label>
          </div>
        </ComponentShowcase>
        <ComponentShowcase title="Checkbox States">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-checked" defaultChecked /> <Label htmlFor="terms-checked">Checked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-disabled" disabled /> <Label htmlFor="terms-disabled">Disabled</Label>
          </div>
           <div className="flex items-center space-x-2">
            <Checkbox id="terms-disabled-checked" defaultChecked disabled /> <Label htmlFor="terms-disabled-checked">Disabled & Checked</Label>
          </div>
        </ComponentShowcase>
      </SectionWrapper>

      {/* shadcn/ui Dialog */}
      <SectionWrapper title="Dialog (shadcn/ui)" id="dialog">
        <ComponentShowcase title="Basic Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile <Edit3 className="ml-2 h-4 w-4"/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Username</Label>
                  <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">Close</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentShowcase>
      </SectionWrapper>

      {/* shadcn/ui Drawer (Mobile-First Focus) */}
      <SectionWrapper title="Drawer (shadcn/ui)" id="drawer">
        <ComponentShowcase title="Basic Drawer" description="Typically used for mobile or side-panel actions.">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Mobile Menu</DrawerTitle>
                <DrawerDescription>Select an option from the menu below.</DrawerDescription>
              </DrawerHeader>
              <nav className="p-4 space-y-2">
                <Button variant="link" className="w-full justify-start"><User className="mr-2 h-4 w-4"/> Profile</Button>
                <Button variant="link" className="w-full justify-start"><Settings className="mr-2 h-4 w-4"/> Settings</Button>
                <Button variant="link" className="w-full justify-start"><Bell className="mr-2 h-4 w-4"/> Notifications</Button>
              </nav>
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ComponentShowcase>
      </SectionWrapper>

      {/* shadcn/ui Sheet (Side Panel) */}
      <SectionWrapper title="Sheet (shadcn/ui)" id="sheet">
        <ComponentShowcase title="Sheet (Right Side)">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet (Right)</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Event Details</SheetTitle>
                <SheetDescription>
                  Information about the selected calendar event.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-3">
                <p><strong className="font-medium">Event:</strong> Team Meeting</p>
                <p><strong className="font-medium">Date:</strong> Tomorrow, 10:00 AM</p>
                <p><strong className="font-medium">Location:</strong> Conference Room B</p>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="button" variant="secondary">Close</Button>
                </SheetClose>
                <Button><CalendarDays className="mr-2 h-4 w-4" /> Add to Calendar</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentShowcase>
         <ComponentShowcase title="Sheet (Left Side)">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">Filters (Left)</Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filter Options</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div><Label htmlFor="filter-cat">Category</Label><Input id="filter-cat" placeholder="e.g. Electronics"/></div>
                <div><Label htmlFor="filter-price">Max Price</Label><Input id="filter-price" type="number" placeholder="e.g. $500"/></div>
                <div className="flex items-center space-x-2"><Checkbox id="filter-stock"/><Label htmlFor="filter-stock">In Stock Only</Label></div>
              </div>
              <SheetFooter>
                 <SheetClose asChild><Button type="button" variant="outline">Clear</Button></SheetClose>
                <Button>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentShowcase>
      </SectionWrapper>

      <footer className="mt-12 py-6 border-t border-slate-200 dark:border-slate-700 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Cultif UI Component Visual Library - All current shadcn/ui components showcased. (Chunk 4 - Final)
        </p>
      </footer>
    </div>
  );
};

export default StyleGuidePage; 