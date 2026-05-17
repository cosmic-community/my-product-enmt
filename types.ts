export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    feature_image?: {
      url: string;
      imgix_url: string;
    };
    category?: string;
    display_order?: number;
  };
}

export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    plan_name?: string;
    tagline?: string;
    monthly_price?: number;
    annual_price?: number;
    description?: string;
    included_features?: string;
    cta_text?: string;
    cta_link?: string;
    highlighted?: boolean;
    display_order?: number;
  };
}

export interface FAQ extends CosmicObject {
  type: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
    category?: string;
    display_order?: number;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    role?: string;
    company?: string;
    quote?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
    featured?: boolean;
  };
}

export interface DocumentationPage extends CosmicObject {
  type: 'documentation-pages';
  metadata: {
    title?: string;
    content?: string;
    category?: string;
    summary?: string;
    display_order?: number;
  };
}