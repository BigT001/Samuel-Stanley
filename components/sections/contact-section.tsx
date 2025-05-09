import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/custom/card"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "@/components/icons/icons"

export function ContactSection() {
  return (
    <section id="contact" className="border-b">
      <div className="container py-12 md:py-24">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>samuel.stanley@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
