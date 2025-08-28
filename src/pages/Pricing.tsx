import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const individualPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "month",
      description: "Perfect for getting started",
      features: [
        "Upload up to 10 PDFs/eBooks or Videos",
        "Multilingual audio & subtitles (2 languages)",
        "Secure private vault access",
        "QR codes for personal sharing"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "month",
      description: "Most popular for creators",
      features: [
        "Unlimited uploads",
        "Multilingual audio & subtitles (5 languages)",
        "Cross-device sync (desktop + mobile)",
        "Basic analytics (downloads & listens)"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "$29",
      period: "month",
      description: "Advanced features for power users",
      features: [
        "Unlimited uploads",
        "Multilingual audio & subtitles (all supported languages)",
        "Advanced analytics (language breakdown, usage trends)",
        "Early access to new features"
      ],
      cta: "Start Free Trial",
      popular: false
    }
  ];

  const organizationPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "month",
      description: "White-label solution for small teams",
      features: [
        "White-label mobile app with your branding",
        "1,000 user limit",
        "Upload PDFs, eBooks, Videos",
        "Multilingual audio & subtitles (5 languages)",
        "QR code distribution"
      ],
      cta: "Request Demo",
      popular: false
    },
    {
      name: "Pro",
      price: "$299",
      period: "month",
      description: "Scalable solution for growing organizations",
      features: [
        "10,000 users",
        "Unlimited uploads",
        "Multilingual audio & subtitles (all supported languages)",
        "Advanced analytics & reporting",
        "Priority support"
      ],
      cta: "Request Demo",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solution for large organizations",
      features: [
        "Unlimited users",
        "API access & system integrations",
        "Dedicated account manager",
        "SLA-backed uptime guarantee",
        "Custom features (on request)"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const comparisonFeatures = [
    { name: "Upload PDFs/eBooks/Videos", starter: "Limited", pro: "Unlimited", premium: "Unlimited", basic: "✓", orgPro: "✓", enterprise: "✓" },
    { name: "Multilingual Support", starter: "2 languages", pro: "5 languages", premium: "All languages", basic: "5 languages", orgPro: "All", enterprise: "All" },
    { name: "White-Label Branding", starter: false, pro: false, premium: false, basic: true, orgPro: true, enterprise: true },
    { name: "QR Code Sharing", starter: true, pro: true, premium: true, basic: true, orgPro: true, enterprise: true },
    { name: "Analytics & Reporting", starter: "Basic", pro: "Basic", premium: "Advanced", basic: "Basic", orgPro: "Advanced", enterprise: "Advanced" },
    { name: "API & Integrations", starter: false, pro: false, premium: false, basic: false, orgPro: false, enterprise: true }
  ];

  const renderFeatureCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-4 w-4 text-primary mx-auto" />
      ) : (
        <X className="h-4 w-4 text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/5">
      <Header />
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs — whether you're an individual creator or a global organization.
          </p>
        </div>

        {/* Individual Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">For Individual Creators</h2>
            <p className="text-muted-foreground">Private vault subscribers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {individualPlans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "cta" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Organization Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">For Organizations</h2>
            <p className="text-muted-foreground">White-label partners: universities, NGOs, publishers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {organizationPlans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "cta" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Feature Comparison</h2>
            <p className="text-muted-foreground">See what's included in each plan</p>
          </div>
          
          <div className="overflow-x-auto bg-background rounded-lg shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Feature</TableHead>
                  <TableHead className="text-center font-semibold">Starter</TableHead>
                  <TableHead className="text-center font-semibold">Pro</TableHead>
                  <TableHead className="text-center font-semibold">Premium</TableHead>
                  <TableHead className="text-center font-semibold">Basic</TableHead>
                  <TableHead className="text-center font-semibold">Pro Org</TableHead>
                  <TableHead className="text-center font-semibold">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonFeatures.map((feature, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell className="text-center">{renderFeatureCell(feature.starter)}</TableCell>
                    <TableCell className="text-center">{renderFeatureCell(feature.pro)}</TableCell>
                    <TableCell className="text-center">{renderFeatureCell(feature.premium)}</TableCell>
                    <TableCell className="text-center">{renderFeatureCell(feature.basic)}</TableCell>
                    <TableCell className="text-center">{renderFeatureCell(feature.orgPro)}</TableCell>
                    <TableCell className="text-center">{renderFeatureCell(feature.enterprise)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary">
            Ready to share your content with the world?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start free today or book a demo for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="cta" className="min-w-[200px]">
              Start Free Vault
            </Button>
            <Button size="xl" variant="outline" className="min-w-[200px]">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;