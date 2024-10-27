import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { recommendedData } from '../data'

function Schedule({cookies}) {
    console.log(cookies.input)
    console.log(recommendedData[(cookies.input).toString()[0]])
    const day1 = recommendedData[(cookies.input).toString()[0]][(cookies.input).toString()[1]][1]
    const day2 = recommendedData[(cookies.input).toString()[0]][(cookies.input).toString()[1]][2]
    const day3 = recommendedData[(cookies.input).toString()[0]][(cookies.input).toString()[1]][3]
    const day4 = recommendedData[(cookies.input).toString()[0]][(cookies.input).toString()[1]][4]
    const day5 = recommendedData[(cookies.input).toString()[0]][(cookies.input).toString()[1]][5]
    const day6 = recommendedData[(cookies.input).toString()[0]][(cookies.input).toString()[1]][6]
    const day7 = recommendedData[(cookies.input).toString()[0]][(cookies.input).toString()[1]][7]
    return (
        <Tabs isFitted size = 'lg' variant = "enclosed">
  <TabList>
    <Tab>Day 1</Tab>
    <Tab>Day 2</Tab>
    <Tab>Day 3</Tab>
    <Tab>Day 4</Tab>
    <Tab>Day 5</Tab>
    <Tab>Day 6</Tab>
    <Tab>Day 7</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>{day1}</p>
    </TabPanel>
    <TabPanel>
      <p>{day2}</p>
    </TabPanel>
    <TabPanel>
      <p>{day3}</p>
    </TabPanel>
    <TabPanel>
      <p>{day4}</p>
    </TabPanel>
    <TabPanel>
      <p>{day5}</p>
    </TabPanel>
    <TabPanel>
      <p>{day6}</p>
    </TabPanel>
    <TabPanel>
      <p>{day7}</p>
    </TabPanel>
  </TabPanels>
</Tabs>

    );
}

export default Schedule