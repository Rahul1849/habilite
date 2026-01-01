# Tables and Charts in Sanity Blog Posts

## Overview

Blog posts now support adding **Tables** and **Charts** directly in the content editor. This allows content creators to add structured data and visualizations without writing code.

## How to Add Tables

1. **In Sanity Studio**, when editing a blog post:
   - Navigate to the "Full Content" field
   - Click the "+" button to add a new content block
   - Select **"Table"** from the list of available types

2. **Creating a Table**:
   - The table editor will open
   - Click on cells to edit them
   - Use the toolbar to add/remove rows and columns
   - The first row is automatically treated as a header

3. **Table Features**:
   - Responsive design (scrollable on mobile)
   - Styled with borders and alternating row colors
   - Header row has highlighted background
   - Supports plain text in cells

## How to Add Charts

1. **In Sanity Studio**, when editing a blog post:
   - Navigate to the "Full Content" field
   - Click the "+" button to add a new content block
   - Select **"Chart"** from the list of available types

2. **Chart Configuration**:
   - **Chart Title** (optional): Title displayed above the chart
   - **Chart Type**: Choose from:
     - **Bar Chart**: Horizontal bars showing values
     - **Line Chart**: Line indicators for values
     - **Pie Chart**: Percentage breakdown with legend
     - **Table (Data Grid)**: Simple table format
   - **Chart Data**: Add data points with:
     - **Label**: Name of the data point
     - **Value**: Numerical value
     - **Color** (optional): Hex color code (e.g., #0891b2)
   - **Description** (optional): Caption or explanation below the chart

3. **Chart Examples**:

   **Bar Chart Example:**
   - Label: "Treatment A", Value: 85, Color: #0891b2
   - Label: "Treatment B", Value: 72, Color: #06b6d4
   - Label: "Treatment C", Value: 90, Color: #22d3ee

   **Pie Chart Example:**
   - Label: "Success Rate", Value: 95
   - Label: "Partial Success", Value: 4
   - Label: "Needs Follow-up", Value: 1

## Technical Details

### Table Structure
Tables from `@sanity/table` plugin have the structure:
```json
{
  "rows": [
    {
      "cells": ["Header 1", "Header 2", "Header 3"]
    },
    {
      "cells": ["Data 1", "Data 2", "Data 3"]
    }
  ]
}
```

### Chart Structure
Charts have the structure:
```json
{
  "title": "Chart Title",
  "chartType": "bar",
  "data": [
    {
      "label": "Item 1",
      "value": 100,
      "color": "#0891b2"
    }
  ],
  "description": "Chart description"
}
```

## Rendering

Both tables and charts are automatically rendered in blog posts with:
- Responsive design
- Proper spacing and margins
- Styled to match the site's design system
- Mobile-friendly layouts

## Notes

- **Table cells** support plain text only (no rich text formatting)
- **Charts** automatically calculate percentages for pie charts
- **Colors** in charts default to the site's primary color (#0891b2) if not specified
- All tables and charts are fully responsive

