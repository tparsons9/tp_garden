import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/folderNav.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import OverflowListFactory from "./OverflowList"

interface FolderNavSection {
  title: string
  entries: string[] // slug suffixes within the folder (e.g. "Sequential-Signal-Model")
}

interface FolderNavOptions {
  title: string
  folderPrefix: string // e.g. "bayesian-learning/"
  sections: FolderNavSection[]
}

export default ((opts: FolderNavOptions) => {
  const { OverflowList, overflowListAfterDOMLoaded } = OverflowListFactory()

  const FolderNav: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const currentSlug = fileData.slug!

    // Build a map from slug suffix to file data for quick lookup
    const folderFiles = allFiles.filter((f) => simplifySlug(f.slug!).startsWith(opts.folderPrefix))
    const fileMap = new Map(
      folderFiles.map((f) => {
        const simplified = simplifySlug(f.slug!)
        const suffix = simplified.slice(opts.folderPrefix.length)
        return [suffix, f]
      }),
    )

    // Index page entry
    const indexFile = folderFiles.find((f) => simplifySlug(f.slug!) === opts.folderPrefix)

    return (
      <div class={classNames(displayClass, "folder-nav")}>
        <h3>{opts.title}</h3>
        <OverflowList>
          {indexFile && (
            <li class="folder-nav-index">
              <a
                href={resolveRelative(currentSlug, indexFile.slug!)}
                class={[
                  "internal",
                  simplifySlug(currentSlug) === opts.folderPrefix ? "is-current" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                Overview
              </a>
            </li>
          )}
          {opts.sections.map((section) => (
            <>
              <li class="folder-nav-section-header">{section.title}</li>
              {section.entries.map((entry) => {
                const file = fileMap.get(entry)
                const entrySlug = opts.folderPrefix + entry
                const isCurrent = simplifySlug(currentSlug) === entrySlug
                if (file) {
                  return (
                    <li>
                      <a
                        href={resolveRelative(currentSlug, file.slug!)}
                        class={["internal", isCurrent ? "is-current" : ""]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {file.frontmatter?.title ?? entry}
                      </a>
                    </li>
                  )
                }
                return (
                  <li>
                    <span class="folder-nav-missing">{entry}</span>
                  </li>
                )
              })}
            </>
          ))}
        </OverflowList>
      </div>
    )
  }

  FolderNav.css = style
  FolderNav.afterDOMLoaded = overflowListAfterDOMLoaded

  return FolderNav
}) satisfies QuartzComponentConstructor<FolderNavOptions>
