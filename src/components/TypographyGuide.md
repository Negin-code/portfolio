# Typography System Guide

This comprehensive typography system ensures consistent, responsive text styling across your entire portfolio. Use these components instead of manual Tailwind classes to maintain perfect consistency.

## 🎯 **Typography Hierarchy**

### **Headings**
```jsx
import { HeroHeading, PageHeading, SectionHeading, SubsectionHeading, CardHeading, SmallHeading } from '../components/Typography';

// Hero heading (Home page main title)
<HeroHeading>UI/UX Designer & Frontend Developer</HeroHeading>

// Page titles (Project pages, About page)
<PageHeading>My Projects</PageHeading>

// Section headings (Major sections)
<SectionHeading>Project Overview</SectionHeading>

// Subsection headings (Within sections)
<SubsectionHeading>User Research</SubsectionHeading>

// Card/component headings
<CardHeading>Key Findings</CardHeading>

// Small headings
<SmallHeading>Details</SmallHeading>
```

### **Body Text**
```jsx
import { LargeText, MediumText, RegularText, SmallText } from '../components/Typography';

// Large text (Hero descriptions, important content)
<LargeText>Creating meaningful digital experiences...</LargeText>

// Medium text (Standard paragraphs, descriptions)
<MediumText>This project focused on improving user experience...</MediumText>

// Regular text (Most common usage)
<RegularText>Standard paragraph content goes here.</RegularText>

// Small text (Secondary information)
<SmallText>Additional details or notes.</SmallText>
```

### **Special Text**
```jsx
import { Caption, Metadata, GradientText } from '../components/Typography';

// Image captions, figure descriptions
<Caption>Project wireframes showing user flow</Caption>

// Project metadata, timestamps, categories
<Metadata>UX/UI Design • 2024</Metadata>

// Gradient text for emphasis
<GradientText>UI/UX Designer</GradientText>
```

## 📱 **Responsive Behavior**

All typography components automatically scale across breakpoints:

- **Mobile (xs-sm)**: Smaller, readable sizes
- **Tablet (md)**: Medium sizes
- **Desktop (lg+)**: Full sizes with proper line heights

**No need to add responsive classes manually!** The system handles this automatically.

## 🎨 **Usage Examples**

### **Home Page Hero**
```jsx
<HeroHeading>
  <GradientText>UI/UX Designer</GradientText>
  <span className="block text-[#493B32] mt-2">&</span>
  <GradientText>Frontend Developer</GradientText>
</HeroHeading>

<LargeText>
  Bridging the gap between 
  <span className="text-[#F75590] font-bold"> logic and empathy</span>
</LargeText>
```

### **Project Pages**
```jsx
<PageHeading>Guardian App</PageHeading>

<SectionHeading>The Problem</SectionHeading>

<MediumText>
  Many people who use drugs casually or alone face a high risk of fatal overdose...
</MediumText>

<SubsectionHeading>User Research</SubsectionHeading>

<RegularText>
  We conducted interviews with 12 participants to understand...
</RegularText>
```

### **Project Metadata**
```jsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
  <div>
    <Metadata>Role</Metadata>
    <MediumText>UX/UI Designer</MediumText>
  </div>
  <div>
    <Metadata>Duration</Metadata>
    <MediumText>8 weeks</MediumText>
  </div>
</div>
```

## 🔧 **Migration Guide**

### **Replace Current Classes**

**❌ Before (Inconsistent)**
```jsx
<h1 className="text-2xl sm:text-5xl font-tan text-[#493B32]">
<h2 className="text-3xl md:text-4xl font-tan text-[#493B32]">
<p className="text-lg md:text-xl text-[#493B32] leading-relaxed">
```

**✅ After (Consistent)**
```jsx
<PageHeading>Title</PageHeading>
<SectionHeading>Section</SectionHeading>
<MediumText>Description text</MediumText>
```

### **Common Replacements**

| Old Pattern | New Component |
|-------------|---------------|
| `text-2xl sm:text-5xl font-tan` | `<PageHeading>` |
| `text-2xl sm:text-3xl font-tan` | `<SectionHeading>` |
| `text-xl font-semibold` | `<SubsectionHeading>` |
| `text-lg md:text-xl` | `<MediumText>` |
| `text-base md:text-lg` | `<RegularText>` |
| `text-sm text-[#493B32]/80` | `<Caption>` |
| `text-xs font-medium` | `<Metadata>` |

## 🎯 **Direct Tailwind Classes**

You can also use the new responsive utility classes directly:

```jsx
<h1 className="text-heading-1 font-tan text-[#493B32]">
<h2 className="text-heading-2 font-tan text-[#493B32]">
<p className="text-body-medium text-[#493B32] leading-relaxed">
```

**Available Classes:**
- `text-heading-hero` through `text-heading-5`
- `text-body-large` through `text-body-small`
- `text-caption`, `text-metadata`

## 📋 **Page Implementation Checklist**

For each page, ensure:

- [ ] **Hero/Page title** uses `<HeroHeading>` or `<PageHeading>`
- [ ] **Section headers** use `<SectionHeading>`
- [ ] **Subsections** use `<SubsectionHeading>`
- [ ] **Body text** uses appropriate `<MediumText>` or `<RegularText>`
- [ ] **Metadata** uses `<Metadata>` component
- [ ] **Captions** use `<Caption>` component
- [ ] **No manual text-* classes** for main content

## 🚀 **Benefits**

✅ **Consistent sizing** across all pages
✅ **Automatic responsiveness** on all devices
✅ **Easy maintenance** - change once, updates everywhere
✅ **Better accessibility** with proper heading hierarchy
✅ **Faster development** with pre-built components

## 💡 **Best Practices**

1. **Always use components** instead of manual classes
2. **Maintain heading hierarchy** (H1 → H2 → H3)
3. **Use semantic HTML** with proper heading tags
4. **Test on all screen sizes** to ensure readability
5. **Group related content** with consistent spacing

---

**Need help?** All components are fully responsive and follow your existing design system. Just import and use! 🎉 