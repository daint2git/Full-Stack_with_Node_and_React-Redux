import {
  html,
  stripIndent,
  stripIndents,
  oneLine,
  inlineLists,
  oneLineInlineLists,
  commaLists,
  commaListsOr,
  commaListsAnd,
  oneLineCommaLists,
  oneLineCommaListsOr,
  oneLineCommaListsAnd,
  TemplateTag,
} from 'common-tags'

import Heading from 'shared/components/atoms/Heading'
import Details from 'shared/components/atoms/Details'
import Figure from 'shared/components/atoms/Figure'
import TextInput from 'shared/components/atoms/TextInput'
import PageLayout from 'shared/components/templates/PageLayout'

const StaticHtml = props => (
  html`
  <h3>About page</h3>
  <div>About text</div>
  <div>
    <p>html of common-tags</p>
  </div>
`
)

const CommonTagsTest = props => (
  <PageLayout currentPath="/common-tags">
    <Heading component="h2">common-tags module page</Heading>
    <Details summary="Available Tags">
      <Figure caption="stripIndent">
        <TextInput
          multiline
          rows="4"
          placeholder={
            stripIndent`
              This is a multi-line string.
              You'll notice that it is indented.
              We don't want to output this indentation.
                  But we do want to keep this line indented.
            `
          }
          onChange={() => {}}
        />
      </Figure>
      <Figure caption="stripIndents">
        <TextInput
          multiline
          rows="4"
          placeholder={
            stripIndents`
              This is a multi-line string.
              You'll notice that it is indented.
              We don't want to output this indentation.
                  But we do want to keep this line indented.
            `
          }
        />
      </Figure>
      <Figure caption="oneLine">
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLine`
              foo
              bar
              baz
            `
          }
        />
      </Figure>
      <Figure caption="inlineLists">
        <TextInput
          multiline
          rows="4"
          placeholder={
            inlineLists`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <Figure caption="oneLineInlineLists">
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLineInlineLists`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <Figure caption="commaLists">
        <TextInput
          multiline
          rows="4"
          placeholder={
            commaLists`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <Figure caption="commaListsOr">
        <TextInput
          multiline
          rows="4"
          placeholder={
            commaListsOr`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <Figure caption="commaListsAnd">
        <TextInput
          multiline
          rows="4"
          placeholder={
            commaListsAnd`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <Figure caption="oneLineCommaLists">
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLineCommaLists`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <Figure caption="oneLineCommaListsOr">
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLineCommaListsOr`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <Figure caption="oneLineCommaListsAnd">
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLineCommaListsAnd`
              I like ${['apples', 'bananas', 'watermelons']}
              They're good!
            `
          }
        />
      </Figure>
      <StaticHtml />
    </Details>
    <Details summary="Advanced Usage">
      <Figure caption="Tail Processing">
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLine`
              foo
              bar\nbaz
            `
          }
        />
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLine`
              ${String.raw`
                foo
                bar\nbaz
              `}
            `
          }
        />
        <TextInput
          multiline
          rows="4"
          placeholder={
            oneLine(String.raw)`
              foo
              bar\nbaz
            `
          }
        />
      </Figure>
      <Figure caption="Make Your Own Template Tag">
        {new TemplateTag()`foo bar`}
      </Figure>
    </Details>
  </PageLayout>
)

export default CommonTagsTest