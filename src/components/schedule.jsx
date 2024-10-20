import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import data from '../data';

function Schedule({cookies}) {
    console.log(cookies.input)
    console.log(data[(cookies.input).toString()[0]])
    const day1 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][1]
    const day2 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][2]
    const day3 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][3]
    const day4 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][4]
    const day5 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][5]
    const day6 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][6]
    const day7 = data[(cookies.input).toString()[0]][(cookies.input).toString()[1]][7]
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