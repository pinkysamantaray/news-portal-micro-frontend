<script>
export default {
    name: "Datatable",
};
</script>

<template>
    <div class="overflow-x-auto">
    <table class="table">
        <!-- head -->
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr class="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr class="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr class="hover">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
        </tr>
        <!-- row 4 -->
        <tr class="hover">
            <th>4</th>
            <td>John Doe</td>
            <td>Auditor</td>
            <td>Green</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>