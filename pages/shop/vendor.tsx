/**
 * Vendor Store
 *
 * A special version of the store for *vendor* users to purchase company colors
 * from their retailers. Shows colors grouped by retailer.
 */
import { DD } from "components/DD"
import { Company, CompanyColor, vendorRetailerColors, company } from "data/db"
import { GetStaticProps } from "next"
import { uniq, compose, pluck, filter, propEq } from "ramda"

// @ts-ignore
const retailerIds = compose(uniq, pluck("company_id"))
// @ts-ignore
const retailerColors = (retailerID: string | number) =>
  filter(propEq("company_id", retailerID))

export default function VendorStore({
  colors,
  retailers,
}: {
  colors: CompanyColor[]
  retailers: Company[]
}) {
  return (
    <div>
      <DD label="colors" json={colors} />
      <DD label="retailers" json={retailers} />

      {retailers.map((i) => (
        <div key={i.id}>
          <h2>{i.name}</h2>
          <ul>
            {/* @ts-ignore */}
            {retailerColors(i.id)(colors).map((i) => (
              <div>{i.name}</div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const colors = await vendorRetailerColors(4579)
  // @ts-ignore
  const retailers = await company.whereIn("id", retailerIds(colors))

  return {
    revalidate: 1,
    props: {
      colors,
      retailers,
    },
  }
}
